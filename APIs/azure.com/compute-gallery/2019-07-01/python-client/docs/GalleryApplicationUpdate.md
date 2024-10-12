# GalleryApplicationUpdate

Specifies information about the gallery Application Definition that you want to update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GalleryApplicationProperties**](GalleryApplicationProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_application_update import GalleryApplicationUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryApplicationUpdate from a JSON string
gallery_application_update_instance = GalleryApplicationUpdate.from_json(json)
# print the JSON string representation of the object
print(GalleryApplicationUpdate.to_json())

# convert the object into a dict
gallery_application_update_dict = gallery_application_update_instance.to_dict()
# create an instance of GalleryApplicationUpdate from a dict
gallery_application_update_from_dict = GalleryApplicationUpdate.from_dict(gallery_application_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


