# ManagementLockProperties

The management lock properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **str** | The lock level of the management lock. | [optional] 
**notes** | **str** | The notes of the management lock. | [optional] 

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


