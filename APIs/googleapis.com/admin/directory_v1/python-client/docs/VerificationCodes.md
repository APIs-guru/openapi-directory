# VerificationCodes

JSON response template for list verification codes operation in Directory API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**items** | [**List[VerificationCode]**](VerificationCode.md) | A list of verification code resources. | [optional] 
**kind** | **str** | The type of the resource. This is always &#x60;admin#directory#verificationCodesList&#x60;. | [optional] [default to 'admin#directory#verificationCodesList']

## Example

```python
from openapi_client.models.verification_codes import VerificationCodes

# TODO update the JSON string below
json = "{}"
# create an instance of VerificationCodes from a JSON string
verification_codes_instance = VerificationCodes.from_json(json)
# print the JSON string representation of the object
print(VerificationCodes.to_json())

# convert the object into a dict
verification_codes_dict = verification_codes_instance.to_dict()
# create an instance of VerificationCodes from a dict
verification_codes_from_dict = VerificationCodes.from_dict(verification_codes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


