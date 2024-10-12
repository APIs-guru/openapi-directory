# AdmCredential

Description of a NotificationHub AdmCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AdmCredentialProperties**](AdmCredentialProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.adm_credential import AdmCredential

# TODO update the JSON string below
json = "{}"
# create an instance of AdmCredential from a JSON string
adm_credential_instance = AdmCredential.from_json(json)
# print the JSON string representation of the object
print(AdmCredential.to_json())

# convert the object into a dict
adm_credential_dict = adm_credential_instance.to_dict()
# create an instance of AdmCredential from a dict
adm_credential_from_dict = AdmCredential.from_dict(adm_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


