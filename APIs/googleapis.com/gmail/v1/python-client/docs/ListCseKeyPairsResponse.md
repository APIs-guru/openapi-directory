# ListCseKeyPairsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cse_key_pairs** | [**List[CseKeyPair]**](CseKeyPair.md) | One page of the list of CSE key pairs installed for the user. | [optional] 
**next_page_token** | **str** | Pagination token to be passed to a subsequent ListCseKeyPairs call in order to retrieve the next page of key pairs. If this value is not returned, then no further pages remain. | [optional] 

## Example

```python
from openapi_client.models.list_cse_key_pairs_response import ListCseKeyPairsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCseKeyPairsResponse from a JSON string
list_cse_key_pairs_response_instance = ListCseKeyPairsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCseKeyPairsResponse.to_json())

# convert the object into a dict
list_cse_key_pairs_response_dict = list_cse_key_pairs_response_instance.to_dict()
# create an instance of ListCseKeyPairsResponse from a dict
list_cse_key_pairs_response_from_dict = ListCseKeyPairsResponse.from_dict(list_cse_key_pairs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


