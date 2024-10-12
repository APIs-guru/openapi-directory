# ListSharesResponse

ListSharesResponse is the result of ListSharesRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token you can use to retrieve the next page of results. Not returned if there are no more results in the list. | [optional] 
**shares** | [**List[Share]**](Share.md) | A list of shares in the project for the specified instance. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_shares_response import ListSharesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSharesResponse from a JSON string
list_shares_response_instance = ListSharesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSharesResponse.to_json())

# convert the object into a dict
list_shares_response_dict = list_shares_response_instance.to_dict()
# create an instance of ListSharesResponse from a dict
list_shares_response_from_dict = ListSharesResponse.from_dict(list_shares_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


