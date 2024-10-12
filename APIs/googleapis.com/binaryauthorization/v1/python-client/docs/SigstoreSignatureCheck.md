# SigstoreSignatureCheck

A Sigstore signature check, which verifies the Sigstore signature associated with an image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sigstore_authorities** | [**List[SigstoreAuthority]**](SigstoreAuthority.md) | Required. The authorities required by this check to verify the signature. A signature only needs to be verified by one authority to pass the check. | [optional] 

## Example

```python
from openapi_client.models.sigstore_signature_check import SigstoreSignatureCheck

# TODO update the JSON string below
json = "{}"
# create an instance of SigstoreSignatureCheck from a JSON string
sigstore_signature_check_instance = SigstoreSignatureCheck.from_json(json)
# print the JSON string representation of the object
print(SigstoreSignatureCheck.to_json())

# convert the object into a dict
sigstore_signature_check_dict = sigstore_signature_check_instance.to_dict()
# create an instance of SigstoreSignatureCheck from a dict
sigstore_signature_check_from_dict = SigstoreSignatureCheck.from_dict(sigstore_signature_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


