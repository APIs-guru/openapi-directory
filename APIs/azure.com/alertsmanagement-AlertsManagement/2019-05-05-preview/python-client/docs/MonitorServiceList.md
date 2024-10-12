# MonitorServiceList

Monitor service details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[MonitorServiceDetails]**](MonitorServiceDetails.md) | Array of operations | 

## Example

```python
from openapi_client.models.monitor_service_list import MonitorServiceList

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorServiceList from a JSON string
monitor_service_list_instance = MonitorServiceList.from_json(json)
# print the JSON string representation of the object
print(MonitorServiceList.to_json())

# convert the object into a dict
monitor_service_list_dict = monitor_service_list_instance.to_dict()
# create an instance of MonitorServiceList from a dict
monitor_service_list_from_dict = MonitorServiceList.from_dict(monitor_service_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


