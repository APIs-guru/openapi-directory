# EncryptionSetIdentity

The managed identity for the disk encryption set. It should be given permission on the key vault before it can be used to encrypt disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**principal_id** | **str** | The object id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-identity-principal-id header in the PUT request if the resource has a systemAssigned(implicit) identity | [optional] [readonly] 
**tenant_id** | **str** | The tenant id of the Managed Identity Resource. This will be sent to the RP from ARM via the x-ms-client-tenant-id header in the PUT request if the resource has a systemAssigned(implicit) identity | [optional] [readonly] 
**type** | **str** | The type of Managed Identity used by the DiskEncryptionSet. Only SystemAssigned is supported. | [optional] 

## Example

```python
from openapi_client.models.encryption_set_identity import EncryptionSetIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionSetIdentity from a JSON string
encryption_set_identity_instance = EncryptionSetIdentity.from_json(json)
# print the JSON string representation of the object
print(EncryptionSetIdentity.to_json())

# convert the object into a dict
encryption_set_identity_dict = encryption_set_identity_instance.to_dict()
# create an instance of EncryptionSetIdentity from a dict
encryption_set_identity_from_dict = EncryptionSetIdentity.from_dict(encryption_set_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


