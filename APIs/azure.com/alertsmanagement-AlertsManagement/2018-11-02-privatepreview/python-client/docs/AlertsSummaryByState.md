# AlertsSummaryByState

Summary of alerts by state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acknowledged** | **int** | Count of alerts with state &#39;Acknowledged&#39; | [optional] 
**closed** | **int** | Count of alerts with state &#39;Closed&#39; | [optional] 
**new** | **int** | Count of alerts with state &#39;New&#39; | [optional] 

## Example

```python
from openapi_client.models.alerts_summary_by_state import AlertsSummaryByState

# TODO update the JSON string below
json = "{}"
# create an instance of AlertsSummaryByState from a JSON string
alerts_summary_by_state_instance = AlertsSummaryByState.from_json(json)
# print the JSON string representation of the object
print(AlertsSummaryByState.to_json())

# convert the object into a dict
alerts_summary_by_state_dict = alerts_summary_by_state_instance.to_dict()
# create an instance of AlertsSummaryByState from a dict
alerts_summary_by_state_from_dict = AlertsSummaryByState.from_dict(alerts_summary_by_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


