# ListNfsSharesResponse

Response message containing the list of NFS shares.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token identifying a page of results from the server. | [optional] 
**nfs_shares** | [**List[NfsShare]**](NfsShare.md) | The list of NFS shares. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_nfs_shares_response import ListNfsSharesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListNfsSharesResponse from a JSON string
list_nfs_shares_response_instance = ListNfsSharesResponse.from_json(json)
# print the JSON string representation of the object
print(ListNfsSharesResponse.to_json())

# convert the object into a dict
list_nfs_shares_response_dict = list_nfs_shares_response_instance.to_dict()
# create an instance of ListNfsSharesResponse from a dict
list_nfs_shares_response_from_dict = ListNfsSharesResponse.from_dict(list_nfs_shares_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


