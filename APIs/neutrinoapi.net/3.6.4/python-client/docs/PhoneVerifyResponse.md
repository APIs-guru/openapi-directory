# PhoneVerifyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calling** | **bool** | True if the call is being made now | 
**number_valid** | **bool** | True if this a valid phone number | 
**security_code** | **str** | The security code generated, you can save this code to perform your own verification or you can use the &lt;a href&#x3D;\&quot;https://www.neutrinoapi.com/api/verify-security-code/\&quot;&gt;Verify Security Code API&lt;/a&gt; | 

## Example

```python
from openapi_client.models.phone_verify_response import PhoneVerifyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneVerifyResponse from a JSON string
phone_verify_response_instance = PhoneVerifyResponse.from_json(json)
# print the JSON string representation of the object
print(PhoneVerifyResponse.to_json())

# convert the object into a dict
phone_verify_response_dict = phone_verify_response_instance.to_dict()
# create an instance of PhoneVerifyResponse from a dict
phone_verify_response_from_dict = PhoneVerifyResponse.from_dict(phone_verify_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


