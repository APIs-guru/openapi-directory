# GalleryItemUriPayload

Location of gallery item payload.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gallery_item_uri** | **str** | URI for your gallery package that has already been uploaded online. | [optional] 

## Example

```python
from openapi_client.models.gallery_item_uri_payload import GalleryItemUriPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryItemUriPayload from a JSON string
gallery_item_uri_payload_instance = GalleryItemUriPayload.from_json(json)
# print the JSON string representation of the object
print(GalleryItemUriPayload.to_json())

# convert the object into a dict
gallery_item_uri_payload_dict = gallery_item_uri_payload_instance.to_dict()
# create an instance of GalleryItemUriPayload from a dict
gallery_item_uri_payload_from_dict = GalleryItemUriPayload.from_dict(gallery_item_uri_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


