# GetRecaptchaParamResponse

Response of getting recaptcha param.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The fixed string \&quot;identitytoolkit#GetRecaptchaParamResponse\&quot;. | [optional] [default to 'identitytoolkit#GetRecaptchaParamResponse']
**recaptcha_site_key** | **str** | Site key registered at recaptcha. | [optional] 
**recaptcha_stoken** | **str** | The stoken field for the recaptcha widget, used to request captcha challenge. | [optional] 

## Example

```python
from openapi_client.models.get_recaptcha_param_response import GetRecaptchaParamResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetRecaptchaParamResponse from a JSON string
get_recaptcha_param_response_instance = GetRecaptchaParamResponse.from_json(json)
# print the JSON string representation of the object
print(GetRecaptchaParamResponse.to_json())

# convert the object into a dict
get_recaptcha_param_response_dict = get_recaptcha_param_response_instance.to_dict()
# create an instance of GetRecaptchaParamResponse from a dict
get_recaptcha_param_response_from_dict = GetRecaptchaParamResponse.from_dict(get_recaptcha_param_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


