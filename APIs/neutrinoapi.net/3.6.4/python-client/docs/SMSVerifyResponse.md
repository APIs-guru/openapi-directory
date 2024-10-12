# SMSVerifyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**number_valid** | **bool** | True if this a valid phone number | 
**security_code** | **str** | The security code generated, you can save this code to perform your own verification or you can use the &lt;a href&#x3D;\&quot;https://www.neutrinoapi.com/api/verify-security-code/\&quot;&gt;Verify Security Code API&lt;/a&gt; | 
**sent** | **bool** | True if the SMS has been sent | 

## Example

```python
from openapi_client.models.sms_verify_response import SMSVerifyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SMSVerifyResponse from a JSON string
sms_verify_response_instance = SMSVerifyResponse.from_json(json)
# print the JSON string representation of the object
print(SMSVerifyResponse.to_json())

# convert the object into a dict
sms_verify_response_dict = sms_verify_response_instance.to_dict()
# create an instance of SMSVerifyResponse from a dict
sms_verify_response_from_dict = SMSVerifyResponse.from_dict(sms_verify_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


