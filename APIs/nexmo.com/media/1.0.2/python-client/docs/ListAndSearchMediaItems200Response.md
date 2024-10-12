# ListAndSearchMediaItems200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**embedded** | [**ListAndSearchMediaItems200ResponseEmbedded**](ListAndSearchMediaItems200ResponseEmbedded.md) |  | [optional] 
**links** | [**ListAndSearchMediaItems200ResponseLinks**](ListAndSearchMediaItems200ResponseLinks.md) |  | [optional] 
**count** | **int** | The total number of records returned by your request. | [optional] [default to 0]
**page_index** | **int** | The &#x60;page_index&#x60; used in your request. | [optional] [default to 0]
**page_size** | **int** | The amount of records returned in this response. | [optional] [default to 0]

## Example

```python
from openapi_client.models.list_and_search_media_items200_response import ListAndSearchMediaItems200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ListAndSearchMediaItems200Response from a JSON string
list_and_search_media_items200_response_instance = ListAndSearchMediaItems200Response.from_json(json)
# print the JSON string representation of the object
print(ListAndSearchMediaItems200Response.to_json())

# convert the object into a dict
list_and_search_media_items200_response_dict = list_and_search_media_items200_response_instance.to_dict()
# create an instance of ListAndSearchMediaItems200Response from a dict
list_and_search_media_items200_response_from_dict = ListAndSearchMediaItems200Response.from_dict(list_and_search_media_items200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


