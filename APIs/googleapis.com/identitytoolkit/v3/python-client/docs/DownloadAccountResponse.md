# DownloadAccountResponse

Response of downloading accounts in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The fixed string \&quot;identitytoolkit#DownloadAccountResponse\&quot;. | [optional] [default to 'identitytoolkit#DownloadAccountResponse']
**next_page_token** | **str** | The next page token. To be used in a subsequent request to return the next page of results. | [optional] 
**users** | [**List[UserInfo]**](UserInfo.md) | The user accounts data. | [optional] 

## Example

```python
from openapi_client.models.download_account_response import DownloadAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadAccountResponse from a JSON string
download_account_response_instance = DownloadAccountResponse.from_json(json)
# print the JSON string representation of the object
print(DownloadAccountResponse.to_json())

# convert the object into a dict
download_account_response_dict = download_account_response_instance.to_dict()
# create an instance of DownloadAccountResponse from a dict
download_account_response_from_dict = DownloadAccountResponse.from_dict(download_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


