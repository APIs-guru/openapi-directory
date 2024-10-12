# ManagementLockProperties

The lock properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **str** | The level of the lock. Possible values are: NotSpecified, CanNotDelete, ReadOnly. CanNotDelete means authorized users are able to read and modify the resources, but not delete. ReadOnly means authorized users can only read from a resource, but they can&#39;t modify or delete it. | 
**notes** | **str** | Notes about the lock. Maximum of 512 characters. | [optional] 
**owners** | [**List[ManagementLockOwner]**](ManagementLockOwner.md) | The owners of the lock. | [optional] 

## Example

```python
from openapi_client.models.management_lock_properties import ManagementLockProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementLockProperties from a JSON string
management_lock_properties_instance = ManagementLockProperties.from_json(json)
# print the JSON string representation of the object
print(ManagementLockProperties.to_json())

# convert the object into a dict
management_lock_properties_dict = management_lock_properties_instance.to_dict()
# create an instance of ManagementLockProperties from a dict
management_lock_properties_from_dict = ManagementLockProperties.from_dict(management_lock_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


