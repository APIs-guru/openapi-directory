# ExternalUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_invitation** | **str** | The token of the app invitation which lead to signup | [optional] 
**avatar_url** | **str** | The avatar URL of the user | [optional] 
**display_name** | **str** | The full name of the user. Might for example be first and last name | [optional] 
**email** | **str** | The email address of the user | 
**name** | **str** | The unique name that is used to identify the user. If no explicit value is given, a default will be auto-generated from the &#x60;display_name&#x60; value | [optional] 
**organization_invitation** | **str** | The token of the organization invitation which lead to signup | [optional] 
**tester_invitation** | **str** | The token of the test invitation which lead to signup | [optional] 

## Example

```python
from openapi_client.models.external_user_request import ExternalUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalUserRequest from a JSON string
external_user_request_instance = ExternalUserRequest.from_json(json)
# print the JSON string representation of the object
print(ExternalUserRequest.to_json())

# convert the object into a dict
external_user_request_dict = external_user_request_instance.to_dict()
# create an instance of ExternalUserRequest from a dict
external_user_request_from_dict = ExternalUserRequest.from_dict(external_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


