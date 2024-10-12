# VerificationCodeRequest

The JSON-serialized leaf certificate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | base-64 representation of X509 certificate .cer file or just .pem file content. | [optional] 

## Example

```python
from openapi_client.models.verification_code_request import VerificationCodeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationCodeRequest from a JSON string
verification_code_request_instance = VerificationCodeRequest.from_json(json)
# print the JSON string representation of the object
print(VerificationCodeRequest.to_json())

# convert the object into a dict
verification_code_request_dict = verification_code_request_instance.to_dict()
# create an instance of VerificationCodeRequest from a dict
verification_code_request_from_dict = VerificationCodeRequest.from_dict(verification_code_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


