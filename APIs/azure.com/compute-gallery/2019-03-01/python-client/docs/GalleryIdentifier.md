# GalleryIdentifier

Describes the gallery unique name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unique_name** | **str** | The unique name of the Shared Image Gallery. This name is generated automatically by Azure. | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_identifier import GalleryIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryIdentifier from a JSON string
gallery_identifier_instance = GalleryIdentifier.from_json(json)
# print the JSON string representation of the object
print(GalleryIdentifier.to_json())

# convert the object into a dict
gallery_identifier_dict = gallery_identifier_instance.to_dict()
# create an instance of GalleryIdentifier from a dict
gallery_identifier_from_dict = GalleryIdentifier.from_dict(gallery_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


