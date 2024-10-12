# SearchAutoCompleteResponse

Search auto complete query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**terms** | [**List[SearchAutoCompleteResponseTermsInner]**](SearchAutoCompleteResponseTermsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_auto_complete_response import SearchAutoCompleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchAutoCompleteResponse from a JSON string
search_auto_complete_response_instance = SearchAutoCompleteResponse.from_json(json)
# print the JSON string representation of the object
print(SearchAutoCompleteResponse.to_json())

# convert the object into a dict
search_auto_complete_response_dict = search_auto_complete_response_instance.to_dict()
# create an instance of SearchAutoCompleteResponse from a dict
search_auto_complete_response_from_dict = SearchAutoCompleteResponse.from_dict(search_auto_complete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


