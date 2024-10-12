# GoogleCloudIdentitytoolkitV2WithdrawMfaResponse

Withdraws MultiFactorAuth response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id_token** | **str** | ID token updated to reflect removal of the second factor. | [optional] 
**refresh_token** | **str** | Refresh token updated to reflect removal of the second factor. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_identitytoolkit_v2_withdraw_mfa_response import GoogleCloudIdentitytoolkitV2WithdrawMfaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIdentitytoolkitV2WithdrawMfaResponse from a JSON string
google_cloud_identitytoolkit_v2_withdraw_mfa_response_instance = GoogleCloudIdentitytoolkitV2WithdrawMfaResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIdentitytoolkitV2WithdrawMfaResponse.to_json())

# convert the object into a dict
google_cloud_identitytoolkit_v2_withdraw_mfa_response_dict = google_cloud_identitytoolkit_v2_withdraw_mfa_response_instance.to_dict()
# create an instance of GoogleCloudIdentitytoolkitV2WithdrawMfaResponse from a dict
google_cloud_identitytoolkit_v2_withdraw_mfa_response_from_dict = GoogleCloudIdentitytoolkitV2WithdrawMfaResponse.from_dict(google_cloud_identitytoolkit_v2_withdraw_mfa_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


