# ListAndSearchMediaItems200ResponseEmbedded

A collection of media items. See [retrieve a media item](#retrieve-a-media-item) for a description of the returned fields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media** | [**List[Media]**](Media.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_and_search_media_items200_response_embedded import ListAndSearchMediaItems200ResponseEmbedded

# TODO update the JSON string below
json = "{}"
# create an instance of ListAndSearchMediaItems200ResponseEmbedded from a JSON string
list_and_search_media_items200_response_embedded_instance = ListAndSearchMediaItems200ResponseEmbedded.from_json(json)
# print the JSON string representation of the object
print(ListAndSearchMediaItems200ResponseEmbedded.to_json())

# convert the object into a dict
list_and_search_media_items200_response_embedded_dict = list_and_search_media_items200_response_embedded_instance.to_dict()
# create an instance of ListAndSearchMediaItems200ResponseEmbedded from a dict
list_and_search_media_items200_response_embedded_from_dict = ListAndSearchMediaItems200ResponseEmbedded.from_dict(list_and_search_media_items200_response_embedded_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


