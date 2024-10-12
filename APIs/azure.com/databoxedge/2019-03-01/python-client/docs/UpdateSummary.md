# UpdateSummary

Details about ongoing updates and availability of updates on the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateSummaryProperties**](UpdateSummaryProperties.md) |  | [optional] 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**name** | **str** | The object name. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_summary import UpdateSummary

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSummary from a JSON string
update_summary_instance = UpdateSummary.from_json(json)
# print the JSON string representation of the object
print(UpdateSummary.to_json())

# convert the object into a dict
update_summary_dict = update_summary_instance.to_dict()
# create an instance of UpdateSummary from a dict
update_summary_from_dict = UpdateSummary.from_dict(update_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


