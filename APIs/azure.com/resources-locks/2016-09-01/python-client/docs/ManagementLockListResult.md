# ManagementLockListResult

The list of locks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[ManagementLockObject]**](ManagementLockObject.md) | The list of locks. | [optional] 

## Example

```python
from openapi_client.models.management_lock_list_result import ManagementLockListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementLockListResult from a JSON string
management_lock_list_result_instance = ManagementLockListResult.from_json(json)
# print the JSON string representation of the object
print(ManagementLockListResult.to_json())

# convert the object into a dict
management_lock_list_result_dict = management_lock_list_result_instance.to_dict()
# create an instance of ManagementLockListResult from a dict
management_lock_list_result_from_dict = ManagementLockListResult.from_dict(management_lock_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


