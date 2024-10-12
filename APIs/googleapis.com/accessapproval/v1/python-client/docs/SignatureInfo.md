# SignatureInfo

Information about the digital signature of the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_kms_key_version** | **str** | The resource name of the customer CryptoKeyVersion used for signing. | [optional] 
**google_key_algorithm** | **str** | The hashing algorithm used for signature verification. It will only be present in the case of Google managed keys. | [optional] 
**google_public_key_pem** | **str** | The public key for the Google default signing, encoded in PEM format. The signature was created using a private key which may be verified using this public key. | [optional] 
**serialized_approval_request** | **bytearray** | The ApprovalRequest that is serialized without the SignatureInfo message field. This data is used with the hashing algorithm to generate the digital signature, and it can be used for signature verification. | [optional] 
**signature** | **bytearray** | The digital signature. | [optional] 

## Example

```python
from openapi_client.models.signature_info import SignatureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SignatureInfo from a JSON string
signature_info_instance = SignatureInfo.from_json(json)
# print the JSON string representation of the object
print(SignatureInfo.to_json())

# convert the object into a dict
signature_info_dict = signature_info_instance.to_dict()
# create an instance of SignatureInfo from a dict
signature_info_from_dict = SignatureInfo.from_dict(signature_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


