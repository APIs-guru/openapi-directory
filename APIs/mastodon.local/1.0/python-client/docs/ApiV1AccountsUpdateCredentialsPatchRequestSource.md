# ApiV1AccountsUpdateCredentialsPatchRequestSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language** | **str** | Default language to use for authored statuses. (ISO 6391) | [optional] 
**privacy** | **str** | Default post privacy for authored statuses. | [optional] 
**sensitive** | **bool** | Whether to mark authored statuses as sensitive by default. | [optional] 

## Example

```python
from openapi_client.models.api_v1_accounts_update_credentials_patch_request_source import ApiV1AccountsUpdateCredentialsPatchRequestSource

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AccountsUpdateCredentialsPatchRequestSource from a JSON string
api_v1_accounts_update_credentials_patch_request_source_instance = ApiV1AccountsUpdateCredentialsPatchRequestSource.from_json(json)
# print the JSON string representation of the object
print(ApiV1AccountsUpdateCredentialsPatchRequestSource.to_json())

# convert the object into a dict
api_v1_accounts_update_credentials_patch_request_source_dict = api_v1_accounts_update_credentials_patch_request_source_instance.to_dict()
# create an instance of ApiV1AccountsUpdateCredentialsPatchRequestSource from a dict
api_v1_accounts_update_credentials_patch_request_source_from_dict = ApiV1AccountsUpdateCredentialsPatchRequestSource.from_dict(api_v1_accounts_update_credentials_patch_request_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


