# SearchItemsByViewUrlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug_options** | [**DebugOptions**](DebugOptions.md) |  | [optional] 
**page_token** | **str** | The next_page_token value returned from a previous request, if any. | [optional] 
**view_url** | **str** | Specify the full view URL to find the corresponding item. The maximum length is 2048 characters. | [optional] 

## Example

```python
from openapi_client.models.search_items_by_view_url_request import SearchItemsByViewUrlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SearchItemsByViewUrlRequest from a JSON string
search_items_by_view_url_request_instance = SearchItemsByViewUrlRequest.from_json(json)
# print the JSON string representation of the object
print(SearchItemsByViewUrlRequest.to_json())

# convert the object into a dict
search_items_by_view_url_request_dict = search_items_by_view_url_request_instance.to_dict()
# create an instance of SearchItemsByViewUrlRequest from a dict
search_items_by_view_url_request_from_dict = SearchItemsByViewUrlRequest.from_dict(search_items_by_view_url_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


