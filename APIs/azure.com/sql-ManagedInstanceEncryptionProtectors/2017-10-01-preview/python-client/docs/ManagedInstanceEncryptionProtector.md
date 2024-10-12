# ManagedInstanceEncryptionProtector

The managed instance encryption protector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of encryption protector. This is metadata used for the Azure portal experience. | [optional] [readonly] 
**properties** | [**ManagedInstanceEncryptionProtectorProperties**](ManagedInstanceEncryptionProtectorProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_encryption_protector import ManagedInstanceEncryptionProtector

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceEncryptionProtector from a JSON string
managed_instance_encryption_protector_instance = ManagedInstanceEncryptionProtector.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceEncryptionProtector.to_json())

# convert the object into a dict
managed_instance_encryption_protector_dict = managed_instance_encryption_protector_instance.to_dict()
# create an instance of ManagedInstanceEncryptionProtector from a dict
managed_instance_encryption_protector_from_dict = ManagedInstanceEncryptionProtector.from_dict(managed_instance_encryption_protector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


