# SearchItemsByViewUrlResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Item]**](Item.md) |  | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.search_items_by_view_url_response import SearchItemsByViewUrlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchItemsByViewUrlResponse from a JSON string
search_items_by_view_url_response_instance = SearchItemsByViewUrlResponse.from_json(json)
# print the JSON string representation of the object
print(SearchItemsByViewUrlResponse.to_json())

# convert the object into a dict
search_items_by_view_url_response_dict = search_items_by_view_url_response_instance.to_dict()
# create an instance of SearchItemsByViewUrlResponse from a dict
search_items_by_view_url_response_from_dict = SearchItemsByViewUrlResponse.from_dict(search_items_by_view_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


