# IdentitytoolkitRelyingpartyVerifyCustomTokenRequest

Request to verify a custom token

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegated_project_number** | **str** | GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. | [optional] 
**instance_id** | **str** | Instance id token of the app. | [optional] 
**return_secure_token** | **bool** | Whether return sts id token and refresh token instead of gitkit token. | [optional] 
**token** | **str** | The custom token to verify | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_verify_custom_token_request import IdentitytoolkitRelyingpartyVerifyCustomTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyVerifyCustomTokenRequest from a JSON string
identitytoolkit_relyingparty_verify_custom_token_request_instance = IdentitytoolkitRelyingpartyVerifyCustomTokenRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyVerifyCustomTokenRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_verify_custom_token_request_dict = identitytoolkit_relyingparty_verify_custom_token_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyVerifyCustomTokenRequest from a dict
identitytoolkit_relyingparty_verify_custom_token_request_from_dict = IdentitytoolkitRelyingpartyVerifyCustomTokenRequest.from_dict(identitytoolkit_relyingparty_verify_custom_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


