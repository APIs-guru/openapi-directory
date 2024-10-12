# SystemStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_instances** | **int** |  | [optional] 
**server_time** | **datetime** |  | [optional] 
**state** | **str** |  | [optional] 
**up_time_in_minutes** | **float** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.system_status import SystemStatus

# TODO update the JSON string below
json = "{}"
# create an instance of SystemStatus from a JSON string
system_status_instance = SystemStatus.from_json(json)
# print the JSON string representation of the object
print(SystemStatus.to_json())

# convert the object into a dict
system_status_dict = system_status_instance.to_dict()
# create an instance of SystemStatus from a dict
system_status_from_dict = SystemStatus.from_dict(system_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


