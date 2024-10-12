# PublicKeyCredential

A public key format and data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format of the key. | [optional] 
**key** | **str** | The key data. | [optional] 

## Example

```python
from openapi_client.models.public_key_credential import PublicKeyCredential

# TODO update the JSON string below
json = "{}"
# create an instance of PublicKeyCredential from a JSON string
public_key_credential_instance = PublicKeyCredential.from_json(json)
# print the JSON string representation of the object
print(PublicKeyCredential.to_json())

# convert the object into a dict
public_key_credential_dict = public_key_credential_instance.to_dict()
# create an instance of PublicKeyCredential from a dict
public_key_credential_from_dict = PublicKeyCredential.from_dict(public_key_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


