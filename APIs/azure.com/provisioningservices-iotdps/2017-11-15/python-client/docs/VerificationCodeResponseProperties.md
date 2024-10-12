# VerificationCodeResponseProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** | Certificate created time. | [optional] 
**expiry** | **str** | Code expiry. | [optional] 
**is_verified** | **bool** | Indicate if the certificate is verified by owner of private key. | [optional] 
**subject** | **str** | Certificate subject. | [optional] 
**thumbprint** | **str** | Certificate thumbprint. | [optional] 
**updated** | **str** | Certificate updated time. | [optional] 
**verification_code** | **str** | Verification code. | [optional] 

## Example

```python
from openapi_client.models.verification_code_response_properties import VerificationCodeResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationCodeResponseProperties from a JSON string
verification_code_response_properties_instance = VerificationCodeResponseProperties.from_json(json)
# print the JSON string representation of the object
print(VerificationCodeResponseProperties.to_json())

# convert the object into a dict
verification_code_response_properties_dict = verification_code_response_properties_instance.to_dict()
# create an instance of VerificationCodeResponseProperties from a dict
verification_code_response_properties_from_dict = VerificationCodeResponseProperties.from_dict(verification_code_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


