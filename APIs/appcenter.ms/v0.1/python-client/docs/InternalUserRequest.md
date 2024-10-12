# InternalUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_invitation** | **str** | The token of the app invitation which lead to signup | [optional] 
**avatar_url** | **str** | The avatar URL of the user | [optional] 
**display_name** | **str** | The full name of the user. Might for example be first and last name | [optional] 
**email** | **str** | The email address of the user | 
**name** | **str** | The unique name that is used to identify the user. | 
**organization_invitation** | **str** | The token of the organization invitation which lead to signup | [optional] 
**password** | **str** | The password of the user. Needs to be at least 8 characters long and contain at least one lower- and one uppercase letter. | 
**portal_subdomain** | **str** | The sub-domain of the portal from which this request was made. Will be used to build the invitation link. | [optional] 
**tester_invitation** | **str** | The token of the test invitation which lead to signup | [optional] 

## Example

```python
from openapi_client.models.internal_user_request import InternalUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InternalUserRequest from a JSON string
internal_user_request_instance = InternalUserRequest.from_json(json)
# print the JSON string representation of the object
print(InternalUserRequest.to_json())

# convert the object into a dict
internal_user_request_dict = internal_user_request_instance.to_dict()
# create an instance of InternalUserRequest from a dict
internal_user_request_from_dict = InternalUserRequest.from_dict(internal_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


