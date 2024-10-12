# ApiV1ListsIdAccountsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_ids** | **List[str]** | Array of account IDs to add to the list. | 

## Example

```python
from openapi_client.models.api_v1_lists_id_accounts_post_request import ApiV1ListsIdAccountsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1ListsIdAccountsPostRequest from a JSON string
api_v1_lists_id_accounts_post_request_instance = ApiV1ListsIdAccountsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1ListsIdAccountsPostRequest.to_json())

# convert the object into a dict
api_v1_lists_id_accounts_post_request_dict = api_v1_lists_id_accounts_post_request_instance.to_dict()
# create an instance of ApiV1ListsIdAccountsPostRequest from a dict
api_v1_lists_id_accounts_post_request_from_dict = ApiV1ListsIdAccountsPostRequest.from_dict(api_v1_lists_id_accounts_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


