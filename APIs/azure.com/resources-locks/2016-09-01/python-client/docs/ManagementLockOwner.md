# ManagementLockOwner

Lock owner properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The application ID of the lock owner. | [optional] 

## Example

```python
from openapi_client.models.management_lock_owner import ManagementLockOwner

# TODO update the JSON string below
json = "{}"
# create an instance of ManagementLockOwner from a JSON string
management_lock_owner_instance = ManagementLockOwner.from_json(json)
# print the JSON string representation of the object
print(ManagementLockOwner.to_json())

# convert the object into a dict
management_lock_owner_dict = management_lock_owner_instance.to_dict()
# create an instance of ManagementLockOwner from a dict
management_lock_owner_from_dict = ManagementLockOwner.from_dict(management_lock_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


