# VerificationCode

The Directory API allows you to view, generate, and invalidate backup verification codes for a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | The type of the resource. This is always &#x60;admin#directory#verificationCode&#x60;. | [optional] [default to 'admin#directory#verificationCode']
**user_id** | **str** | The obfuscated unique ID of the user. | [optional] 
**verification_code** | **str** | A current verification code for the user. Invalidated or used verification codes are not returned as part of the result. | [optional] 

## Example

```python
from openapi_client.models.verification_code import VerificationCode

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationCode from a JSON string
verification_code_instance = VerificationCode.from_json(json)
# print the JSON string representation of the object
print(VerificationCode.to_json())

# convert the object into a dict
verification_code_dict = verification_code_instance.to_dict()
# create an instance of VerificationCode from a dict
verification_code_from_dict = VerificationCode.from_dict(verification_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


