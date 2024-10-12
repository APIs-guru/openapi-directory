# ListCustomListsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_lists** | [**List[CustomList]**](CustomList.md) | The list of custom lists. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListCustomLists&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_custom_lists_response import ListCustomListsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListCustomListsResponse from a JSON string
list_custom_lists_response_instance = ListCustomListsResponse.from_json(json)
# print the JSON string representation of the object
print(ListCustomListsResponse.to_json())

# convert the object into a dict
list_custom_lists_response_dict = list_custom_lists_response_instance.to_dict()
# create an instance of ListCustomListsResponse from a dict
list_custom_lists_response_from_dict = ListCustomListsResponse.from_dict(list_custom_lists_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


