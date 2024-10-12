# CredentialCreateOrUpdateProperties

The properties of the create credential operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the credential. | [optional] 
**password** | **str** | Gets or sets the password of the credential. | 
**user_name** | **str** | Gets or sets the user name of the credential. | 

## Example

```python
from openapi_client.models.credential_create_or_update_properties import CredentialCreateOrUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialCreateOrUpdateProperties from a JSON string
credential_create_or_update_properties_instance = CredentialCreateOrUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(CredentialCreateOrUpdateProperties.to_json())

# convert the object into a dict
credential_create_or_update_properties_dict = credential_create_or_update_properties_instance.to_dict()
# create an instance of CredentialCreateOrUpdateProperties from a dict
credential_create_or_update_properties_from_dict = CredentialCreateOrUpdateProperties.from_dict(credential_create_or_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


