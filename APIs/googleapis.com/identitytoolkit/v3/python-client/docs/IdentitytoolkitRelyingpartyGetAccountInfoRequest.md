# IdentitytoolkitRelyingpartyGetAccountInfoRequest

Request to get the account information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegated_project_number** | **str** | GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. | [optional] 
**email** | **List[str]** | The list of emails of the users to inquiry. | [optional] 
**id_token** | **str** | The GITKit token of the authenticated user. | [optional] 
**local_id** | **List[str]** | The list of local ID&#39;s of the users to inquiry. | [optional] 
**phone_number** | **List[str]** | Privileged caller can query users by specified phone number. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_get_account_info_request import IdentitytoolkitRelyingpartyGetAccountInfoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyGetAccountInfoRequest from a JSON string
identitytoolkit_relyingparty_get_account_info_request_instance = IdentitytoolkitRelyingpartyGetAccountInfoRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyGetAccountInfoRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_get_account_info_request_dict = identitytoolkit_relyingparty_get_account_info_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyGetAccountInfoRequest from a dict
identitytoolkit_relyingparty_get_account_info_request_from_dict = IdentitytoolkitRelyingpartyGetAccountInfoRequest.from_dict(identitytoolkit_relyingparty_get_account_info_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


