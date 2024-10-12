# VerificationCodeResponse

Description of the response of the verification code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Request etag. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | Name of certificate. | [optional] [readonly] 
**properties** | [**VerificationCodeResponseProperties**](VerificationCodeResponseProperties.md) |  | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.verification_code_response import VerificationCodeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationCodeResponse from a JSON string
verification_code_response_instance = VerificationCodeResponse.from_json(json)
# print the JSON string representation of the object
print(VerificationCodeResponse.to_json())

# convert the object into a dict
verification_code_response_dict = verification_code_response_instance.to_dict()
# create an instance of VerificationCodeResponse from a dict
verification_code_response_from_dict = VerificationCodeResponse.from_dict(verification_code_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


