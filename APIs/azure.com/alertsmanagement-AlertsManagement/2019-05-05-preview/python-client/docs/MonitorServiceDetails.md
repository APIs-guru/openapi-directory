# MonitorServiceDetails

Details of a monitor service

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Monitor service display name | [optional] 
**name** | **str** | Monitor service name | [optional] 

## Example

```python
from openapi_client.models.monitor_service_details import MonitorServiceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MonitorServiceDetails from a JSON string
monitor_service_details_instance = MonitorServiceDetails.from_json(json)
# print the JSON string representation of the object
print(MonitorServiceDetails.to_json())

# convert the object into a dict
monitor_service_details_dict = monitor_service_details_instance.to_dict()
# create an instance of MonitorServiceDetails from a dict
monitor_service_details_from_dict = MonitorServiceDetails.from_dict(monitor_service_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


