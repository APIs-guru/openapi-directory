# GalleryApplicationVersionUpdate

Specifies information about the gallery Application Version that you want to update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GalleryApplicationVersionProperties**](GalleryApplicationVersionProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_application_version_update import GalleryApplicationVersionUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryApplicationVersionUpdate from a JSON string
gallery_application_version_update_instance = GalleryApplicationVersionUpdate.from_json(json)
# print the JSON string representation of the object
print(GalleryApplicationVersionUpdate.to_json())

# convert the object into a dict
gallery_application_version_update_dict = gallery_application_version_update_instance.to_dict()
# create an instance of GalleryApplicationVersionUpdate from a dict
gallery_application_version_update_from_dict = GalleryApplicationVersionUpdate.from_dict(gallery_application_version_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


