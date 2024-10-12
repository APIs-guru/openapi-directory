# IdentitytoolkitRelyingpartySetAccountInfoRequest

Request to set the account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**captcha_challenge** | **str** | The captcha challenge. | [optional] 
**captcha_response** | **str** | Response to the captcha. | [optional] 
**created_at** | **str** | The timestamp when the account is created. | [optional] 
**custom_attributes** | **str** | The custom attributes to be set in the user&#39;s id token. | [optional] 
**delegated_project_number** | **str** | GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. | [optional] 
**delete_attribute** | **List[str]** | The attributes users request to delete. | [optional] 
**delete_provider** | **List[str]** | The IDPs the user request to delete. | [optional] 
**disable_user** | **bool** | Whether to disable the user. | [optional] 
**display_name** | **str** | The name of the user. | [optional] 
**email** | **str** | The email of the user. | [optional] 
**email_verified** | **bool** | Mark the email as verified or not. | [optional] 
**id_token** | **str** | The GITKit token of the authenticated user. | [optional] 
**instance_id** | **str** | Instance id token of the app. | [optional] 
**last_login_at** | **str** | Last login timestamp. | [optional] 
**local_id** | **str** | The local ID of the user. | [optional] 
**oob_code** | **str** | The out-of-band code of the change email request. | [optional] 
**password** | **str** | The new password of the user. | [optional] 
**phone_number** | **str** | Privileged caller can update user with specified phone number. | [optional] 
**photo_url** | **str** | The photo url of the user. | [optional] 
**provider** | **List[str]** | The associated IDPs of the user. | [optional] 
**return_secure_token** | **bool** | Whether return sts id token and refresh token instead of gitkit token. | [optional] 
**upgrade_to_federated_login** | **bool** | Mark the user to upgrade to federated login. | [optional] 
**valid_since** | **str** | Timestamp in seconds for valid login token. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_set_account_info_request import IdentitytoolkitRelyingpartySetAccountInfoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartySetAccountInfoRequest from a JSON string
identitytoolkit_relyingparty_set_account_info_request_instance = IdentitytoolkitRelyingpartySetAccountInfoRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartySetAccountInfoRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_set_account_info_request_dict = identitytoolkit_relyingparty_set_account_info_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartySetAccountInfoRequest from a dict
identitytoolkit_relyingparty_set_account_info_request_from_dict = IdentitytoolkitRelyingpartySetAccountInfoRequest.from_dict(identitytoolkit_relyingparty_set_account_info_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


