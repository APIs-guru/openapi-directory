# AkamaiSignatureHeaderAuthenticationKey

Akamai Signature Header authentication key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base64_key** | **str** | authentication key | [optional] 
**expiration** | **datetime** | The expiration time of the authentication key. | [optional] 
**identifier** | **str** | identifier of the key | [optional] 

## Example

```python
from openapi_client.models.akamai_signature_header_authentication_key import AkamaiSignatureHeaderAuthenticationKey

# TODO update the JSON string below
json = "{}"
# create an instance of AkamaiSignatureHeaderAuthenticationKey from a JSON string
akamai_signature_header_authentication_key_instance = AkamaiSignatureHeaderAuthenticationKey.from_json(json)
# print the JSON string representation of the object
print(AkamaiSignatureHeaderAuthenticationKey.to_json())

# convert the object into a dict
akamai_signature_header_authentication_key_dict = akamai_signature_header_authentication_key_instance.to_dict()
# create an instance of AkamaiSignatureHeaderAuthenticationKey from a dict
akamai_signature_header_authentication_key_from_dict = AkamaiSignatureHeaderAuthenticationKey.from_dict(akamai_signature_header_authentication_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


