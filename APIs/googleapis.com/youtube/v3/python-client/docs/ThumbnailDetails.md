# ThumbnailDetails

Internal representation of thumbnails for a YouTube resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high** | [**Thumbnail**](Thumbnail.md) |  | [optional] 
**maxres** | [**Thumbnail**](Thumbnail.md) |  | [optional] 
**medium** | [**Thumbnail**](Thumbnail.md) |  | [optional] 
**standard** | [**Thumbnail**](Thumbnail.md) |  | [optional] 

## Example

```python
from openapi_client.models.thumbnail_details import ThumbnailDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ThumbnailDetails from a JSON string
thumbnail_details_instance = ThumbnailDetails.from_json(json)
# print the JSON string representation of the object
print(ThumbnailDetails.to_json())

# convert the object into a dict
thumbnail_details_dict = thumbnail_details_instance.to_dict()
# create an instance of ThumbnailDetails from a dict
thumbnail_details_from_dict = ThumbnailDetails.from_dict(thumbnail_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


