# SearchChainsResponse

Response message for Locations.SearchChains.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chains** | [**List[Chain]**](Chain.md) | Chains that match the queried chain_display_name in SearchChainsRequest. If there are no matches, this field will be empty. Results are listed in order of relevance. | [optional] 

## Example

```python
from openapi_client.models.search_chains_response import SearchChainsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchChainsResponse from a JSON string
search_chains_response_instance = SearchChainsResponse.from_json(json)
# print the JSON string representation of the object
print(SearchChainsResponse.to_json())

# convert the object into a dict
search_chains_response_dict = search_chains_response_instance.to_dict()
# create an instance of SearchChainsResponse from a dict
search_chains_response_from_dict = SearchChainsResponse.from_dict(search_chains_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


