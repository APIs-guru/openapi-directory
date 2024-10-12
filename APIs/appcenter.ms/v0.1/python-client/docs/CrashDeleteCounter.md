# CrashDeleteCounter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | [optional] 
**attachments_deleted** | **int** |  | [optional] 
**blobs_failed** | **int** |  | [optional] 
**blobs_succeeded** | **int** |  | [optional] 
**crash_group_id** | **str** |  | [optional] 
**crash_id** | **str** |  | [optional] 
**crashes_deleted** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.crash_delete_counter import CrashDeleteCounter

# TODO update the JSON string below
json = "{}"
# create an instance of CrashDeleteCounter from a JSON string
crash_delete_counter_instance = CrashDeleteCounter.from_json(json)
# print the JSON string representation of the object
print(CrashDeleteCounter.to_json())

# convert the object into a dict
crash_delete_counter_dict = crash_delete_counter_instance.to_dict()
# create an instance of CrashDeleteCounter from a dict
crash_delete_counter_from_dict = CrashDeleteCounter.from_dict(crash_delete_counter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


