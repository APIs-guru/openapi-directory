# AlertsSummary

Summary of alerts based on the input filters and 'groupby' parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AlertsSummaryGroup**](AlertsSummaryGroup.md) |  | [optional] 
**id** | **str** | Azure resource Id | [optional] [readonly] 
**name** | **str** | Azure resource name | [optional] [readonly] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.alerts_summary import AlertsSummary

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsSummary from a JSON string
alerts_summary_instance = AlertsSummary.from_json(json)
# print the JSON string representation of the object
print(AlertsSummary.to_json())

# convert the object into a dict
alerts_summary_dict = alerts_summary_instance.to_dict()
# create an instance of AlertsSummary from a dict
alerts_summary_from_dict = AlertsSummary.from_dict(alerts_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


