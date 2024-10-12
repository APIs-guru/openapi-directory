# ApiV1AccountsUpdateCredentialsPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avatar** | **str** | Avatar image encoded using multipart/form-data | [optional] 
**bot** | **bool** | Whether the account has a bot flag. | [optional] 
**discoverable** | **str** | Whether the account should be shown in the profile directory. | [optional] 
**display_name** | **str** | The display name to use for the profile. | [optional] 
**fields_attributes** | **object** | Profile metadata &#x60;name&#x60; and &#x60;value&#x60;. (By default, max 4 fields and 255 characters per property/value) | [optional] 
**header** | **str** | Header image encoded using multipart/form-data | [optional] 
**locked** | **bool** | Whether manual approval of follow requests is required. | [optional] 
**note** | **str** | The account bio. | [optional] 
**source** | [**ApiV1AccountsUpdateCredentialsPatchRequestSource**](ApiV1AccountsUpdateCredentialsPatchRequestSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_v1_accounts_update_credentials_patch_request import ApiV1AccountsUpdateCredentialsPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AccountsUpdateCredentialsPatchRequest from a JSON string
api_v1_accounts_update_credentials_patch_request_instance = ApiV1AccountsUpdateCredentialsPatchRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AccountsUpdateCredentialsPatchRequest.to_json())

# convert the object into a dict
api_v1_accounts_update_credentials_patch_request_dict = api_v1_accounts_update_credentials_patch_request_instance.to_dict()
# create an instance of ApiV1AccountsUpdateCredentialsPatchRequest from a dict
api_v1_accounts_update_credentials_patch_request_from_dict = ApiV1AccountsUpdateCredentialsPatchRequest.from_dict(api_v1_accounts_update_credentials_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


