# IdpCredential

Credential for verifying signatures produced by the Identity Provider.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dsa_key_info** | [**DsaPublicKeyInfo**](DsaPublicKeyInfo.md) |  | [optional] 
**name** | **str** | Output only. [Resource name](https://cloud.google.com/apis/design/resource_names) of the credential. | [optional] [readonly] 
**rsa_key_info** | [**RsaPublicKeyInfo**](RsaPublicKeyInfo.md) |  | [optional] 
**update_time** | **str** | Output only. Time when the &#x60;IdpCredential&#x60; was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.idp_credential import IdpCredential

# TODO update the JSON string below
json = "{}"
# create an instance of IdpCredential from a JSON string
idp_credential_instance = IdpCredential.from_json(json)
# print the JSON string representation of the object
print(IdpCredential.to_json())

# convert the object into a dict
idp_credential_dict = idp_credential_instance.to_dict()
# create an instance of IdpCredential from a dict
idp_credential_from_dict = IdpCredential.from_dict(idp_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


