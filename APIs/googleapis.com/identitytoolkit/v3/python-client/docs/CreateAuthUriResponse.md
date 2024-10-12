# CreateAuthUriResponse

Response of creating the IDP authentication URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_providers** | **List[str]** | all providers the user has once used to do federated login | [optional] 
**auth_uri** | **str** | The URI used by the IDP to authenticate the user. | [optional] 
**captcha_required** | **bool** | True if captcha is required. | [optional] 
**for_existing_provider** | **bool** | True if the authUri is for user&#39;s existing provider. | [optional] 
**kind** | **str** | The fixed string identitytoolkit#CreateAuthUriResponse\&quot;. | [optional] [default to 'identitytoolkit#CreateAuthUriResponse']
**provider_id** | **str** | The provider ID of the auth URI. | [optional] 
**registered** | **bool** | Whether the user is registered if the identifier is an email. | [optional] 
**session_id** | **str** | Session ID which should be passed in the following verifyAssertion request. | [optional] 
**signin_methods** | **List[str]** | All sign-in methods this user has used. | [optional] 

## Example

```python
from openapi_client.models.create_auth_uri_response import CreateAuthUriResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAuthUriResponse from a JSON string
create_auth_uri_response_instance = CreateAuthUriResponse.from_json(json)
# print the JSON string representation of the object
print(CreateAuthUriResponse.to_json())

# convert the object into a dict
create_auth_uri_response_dict = create_auth_uri_response_instance.to_dict()
# create an instance of CreateAuthUriResponse from a dict
create_auth_uri_response_from_dict = CreateAuthUriResponse.from_dict(create_auth_uri_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


