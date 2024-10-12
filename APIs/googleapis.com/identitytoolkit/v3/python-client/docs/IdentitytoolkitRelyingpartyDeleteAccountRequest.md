# IdentitytoolkitRelyingpartyDeleteAccountRequest

Request to delete account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegated_project_number** | **str** | GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. | [optional] 
**id_token** | **str** | The GITKit token or STS id token of the authenticated user. | [optional] 
**local_id** | **str** | The local ID of the user. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_delete_account_request import IdentitytoolkitRelyingpartyDeleteAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyDeleteAccountRequest from a JSON string
identitytoolkit_relyingparty_delete_account_request_instance = IdentitytoolkitRelyingpartyDeleteAccountRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyDeleteAccountRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_delete_account_request_dict = identitytoolkit_relyingparty_delete_account_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyDeleteAccountRequest from a dict
identitytoolkit_relyingparty_delete_account_request_from_dict = IdentitytoolkitRelyingpartyDeleteAccountRequest.from_dict(identitytoolkit_relyingparty_delete_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


