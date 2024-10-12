# IdentitytoolkitRelyingpartySignOutUserRequest

Request to sign out user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_id** | **str** | Instance id token of the app. | [optional] 
**local_id** | **str** | The local ID of the user. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_sign_out_user_request import IdentitytoolkitRelyingpartySignOutUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartySignOutUserRequest from a JSON string
identitytoolkit_relyingparty_sign_out_user_request_instance = IdentitytoolkitRelyingpartySignOutUserRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartySignOutUserRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_sign_out_user_request_dict = identitytoolkit_relyingparty_sign_out_user_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartySignOutUserRequest from a dict
identitytoolkit_relyingparty_sign_out_user_request_from_dict = IdentitytoolkitRelyingpartySignOutUserRequest.from_dict(identitytoolkit_relyingparty_sign_out_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


