# ListAccountLinksResponse

Response message for AccountLinkService.ListAccountLinks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_links** | [**List[AccountLink]**](AccountLink.md) | A list of all account links associated with the Hotel Center account being queried. | [optional] 

## Example

```python
from openapi_client.models.list_account_links_response import ListAccountLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountLinksResponse from a JSON string
list_account_links_response_instance = ListAccountLinksResponse.from_json(json)
# print the JSON string representation of the object
print(ListAccountLinksResponse.to_json())

# convert the object into a dict
list_account_links_response_dict = list_account_links_response_instance.to_dict()
# create an instance of ListAccountLinksResponse from a dict
list_account_links_response_from_dict = ListAccountLinksResponse.from_dict(list_account_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


