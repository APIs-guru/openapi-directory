# IdentitytoolkitRelyingpartyDownloadAccountRequest

Request to download user account in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegated_project_number** | **str** | GCP project number of the requesting delegated app. Currently only intended for Firebase V1 migration. | [optional] 
**max_results** | **int** | The max number of results to return in the response. | [optional] 
**next_page_token** | **str** | The token for the next page. This should be taken from the previous response. | [optional] 
**target_project_id** | **str** | Specify which project (field value is actually project id) to operate. Only used when provided credential. | [optional] 

## Example

```python
from openapi_client.models.identitytoolkit_relyingparty_download_account_request import IdentitytoolkitRelyingpartyDownloadAccountRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IdentitytoolkitRelyingpartyDownloadAccountRequest from a JSON string
identitytoolkit_relyingparty_download_account_request_instance = IdentitytoolkitRelyingpartyDownloadAccountRequest.from_json(json)
# print the JSON string representation of the object
print(IdentitytoolkitRelyingpartyDownloadAccountRequest.to_json())

# convert the object into a dict
identitytoolkit_relyingparty_download_account_request_dict = identitytoolkit_relyingparty_download_account_request_instance.to_dict()
# create an instance of IdentitytoolkitRelyingpartyDownloadAccountRequest from a dict
identitytoolkit_relyingparty_download_account_request_from_dict = IdentitytoolkitRelyingpartyDownloadAccountRequest.from_dict(identitytoolkit_relyingparty_download_account_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


