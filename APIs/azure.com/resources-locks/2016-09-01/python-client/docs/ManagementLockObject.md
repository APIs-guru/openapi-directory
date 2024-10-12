# ManagementLockObject

The lock information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource ID of the lock. | [optional] [readonly] 
**name** | **str** | The name of the lock. | [optional] [readonly] 
**properties** | [**ManagementLockProperties**](ManagementLockProperties.md) |  | 
**type** | **str** | The resource type of the lock - Microsoft.Authorization/locks. | [optional] [readonly] 

## Example

```python
from openapi_client.models.management_lock_object import ManagementLockObject

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementLockObject from a JSON string
management_lock_object_instance = ManagementLockObject.from_json(json)
# print the JSON string representation of the object
print(ManagementLockObject.to_json())

# convert the object into a dict
management_lock_object_dict = management_lock_object_instance.to_dict()
# create an instance of ManagementLockObject from a dict
management_lock_object_from_dict = ManagementLockObject.from_dict(management_lock_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


