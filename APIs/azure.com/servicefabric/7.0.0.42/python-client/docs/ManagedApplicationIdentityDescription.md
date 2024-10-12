# ManagedApplicationIdentityDescription

Managed application identity description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**managed_identities** | [**List[ManagedApplicationIdentity]**](ManagedApplicationIdentity.md) | A list of managed application identity objects. | [optional] 
**token_service_endpoint** | **str** | Token service endpoint. | [optional] 

## Example

```python
from openapi_client.models.managed_application_identity_description import ManagedApplicationIdentityDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedApplicationIdentityDescription from a JSON string
managed_application_identity_description_instance = ManagedApplicationIdentityDescription.from_json(json)
# print the JSON string representation of the object
print(ManagedApplicationIdentityDescription.to_json())

# convert the object into a dict
managed_application_identity_description_dict = managed_application_identity_description_instance.to_dict()
# create an instance of ManagedApplicationIdentityDescription from a dict
managed_application_identity_description_from_dict = ManagedApplicationIdentityDescription.from_dict(managed_application_identity_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


