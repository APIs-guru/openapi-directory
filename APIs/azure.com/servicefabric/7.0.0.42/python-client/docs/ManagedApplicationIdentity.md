# ManagedApplicationIdentity

Describes a managed application identity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the identity. | 
**principal_id** | **str** | The identity&#39;s PrincipalId. | [optional] 

## Example

```python
from openapi_client.models.managed_application_identity import ManagedApplicationIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedApplicationIdentity from a JSON string
managed_application_identity_instance = ManagedApplicationIdentity.from_json(json)
# print the JSON string representation of the object
print(ManagedApplicationIdentity.to_json())

# convert the object into a dict
managed_application_identity_dict = managed_application_identity_instance.to_dict()
# create an instance of ManagedApplicationIdentity from a dict
managed_application_identity_from_dict = ManagedApplicationIdentity.from_dict(managed_application_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


