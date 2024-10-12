# ListViewsResponse

The response from ListViews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there might be more results than appear in this response, then nextPageToken is included. To get the next set of results, call the same method again using the value of nextPageToken as pageToken. | [optional] 
**views** | [**List[LogView]**](LogView.md) | A list of views. | [optional] 

## Example

```python
from openapi_client.models.list_views_response import ListViewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListViewsResponse from a JSON string
list_views_response_instance = ListViewsResponse.from_json(json)
# print the JSON string representation of the object
print(ListViewsResponse.to_json())

# convert the object into a dict
list_views_response_dict = list_views_response_instance.to_dict()
# create an instance of ListViewsResponse from a dict
list_views_response_from_dict = ListViewsResponse.from_dict(list_views_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


