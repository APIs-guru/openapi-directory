# SapMonitorListResult

The response from the List SAP monitors operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of SAP monitors. | [optional] 
**value** | [**List[SapMonitor]**](SapMonitor.md) | The list of SAP monitors. | [optional] 

## Example

```python
from openapi_client.models.sap_monitor_list_result import SapMonitorListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SapMonitorListResult from a JSON string
sap_monitor_list_result_instance = SapMonitorListResult.from_json(json)
# print the JSON string representation of the object
print(SapMonitorListResult.to_json())

# convert the object into a dict
sap_monitor_list_result_dict = sap_monitor_list_result_instance.to_dict()
# create an instance of SapMonitorListResult from a dict
sap_monitor_list_result_from_dict = SapMonitorListResult.from_dict(sap_monitor_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


