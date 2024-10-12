# UserGenerateSsoUrl200Response

Generate SSO Url operations response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Redirect Url containing the SSO URL value. | [optional] 

## Example

```python
from openapi_client.models.user_generate_sso_url200_response import UserGenerateSsoUrl200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UserGenerateSsoUrl200Response from a JSON string
user_generate_sso_url200_response_instance = UserGenerateSsoUrl200Response.from_json(json)
# print the JSON string representation of the object
print(UserGenerateSsoUrl200Response.to_json())

# convert the object into a dict
user_generate_sso_url200_response_dict = user_generate_sso_url200_response_instance.to_dict()
# create an instance of UserGenerateSsoUrl200Response from a dict
user_generate_sso_url200_response_from_dict = UserGenerateSsoUrl200Response.from_dict(user_generate_sso_url200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


