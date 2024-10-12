# CredentialUpdateProperties

The properties of the Update credential

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Gets or sets the description of the credential. | [optional] 
**password** | **str** | Gets or sets the password of the credential. | [optional] 
**user_name** | **str** | Gets or sets the user name of the credential. | [optional] 

## Example

```python
from openapi_client.models.credential_update_properties import CredentialUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CredentialUpdateProperties from a JSON string
credential_update_properties_instance = CredentialUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(CredentialUpdateProperties.to_json())

# convert the object into a dict
credential_update_properties_dict = credential_update_properties_instance.to_dict()
# create an instance of CredentialUpdateProperties from a dict
credential_update_properties_from_dict = CredentialUpdateProperties.from_dict(credential_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


