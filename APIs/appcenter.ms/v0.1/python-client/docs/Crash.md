# Crash


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | **str** |  | 
**crash_id** | **str** |  | 
**details** | [**CrashDetails**](CrashDetails.md) |  | [optional] 
**device** | **str** |  | 
**device_name** | **str** |  | [optional] 
**display_id** | **str** |  | [optional] 
**new_crash_group_id** | **str** |  | 
**new_crash_id** | **str** |  | 
**os_type** | **str** |  | [optional] 
**os_version** | **str** |  | 
**stacktrace** | [**Stacktrace**](Stacktrace.md) |  | [optional] 
**timestamp** | **datetime** |  | 
**user_email** | **str** |  | [optional] 
**user_name** | **str** |  | 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.crash import Crash

# TODO update the JSON string below
json = "{}"
# create an instance of Crash from a JSON string
crash_instance = Crash.from_json(json)
# print the JSON string representation of the object
print(Crash.to_json())

# convert the object into a dict
crash_dict = crash_instance.to_dict()
# create an instance of Crash from a dict
crash_from_dict = Crash.from_dict(crash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


