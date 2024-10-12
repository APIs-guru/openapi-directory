# MediaServiceCollection

A collection of MediaService items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** | A link to the next page of the collection (when the collection contains too many results to return in one response). | [optional] 
**value** | [**List[MediaService]**](MediaService.md) | A collection of MediaService items. | [optional] 

## Example

```python
from openapi_client.models.media_service_collection import MediaServiceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of MediaServiceCollection from a JSON string
media_service_collection_instance = MediaServiceCollection.from_json(json)
# print the JSON string representation of the object
print(MediaServiceCollection.to_json())

# convert the object into a dict
media_service_collection_dict = media_service_collection_instance.to_dict()
# create an instance of MediaServiceCollection from a dict
media_service_collection_from_dict = MediaServiceCollection.from_dict(media_service_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


