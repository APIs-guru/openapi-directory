# AdmCredentialProperties

Description of a NotificationHub AdmCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token_url** | **str** | Gets or sets the URL of the authorization token. | [optional] 
**client_id** | **str** | Gets or sets the client identifier. | [optional] 
**client_secret** | **str** | Gets or sets the credential secret access key. | [optional] 

## Example

```python
from openapi_client.models.adm_credential_properties import AdmCredentialProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AdmCredentialProperties from a JSON string
adm_credential_properties_instance = AdmCredentialProperties.from_json(json)
# print the JSON string representation of the object
print(AdmCredentialProperties.to_json())

# convert the object into a dict
adm_credential_properties_dict = adm_credential_properties_instance.to_dict()
# create an instance of AdmCredentialProperties from a dict
adm_credential_properties_from_dict = AdmCredentialProperties.from_dict(adm_credential_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


