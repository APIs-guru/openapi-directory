# GalleryApplication

Specifies information about the gallery Application Definition that you want to create or update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GalleryApplicationProperties**](GalleryApplicationProperties.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.gallery_application import GalleryApplication

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryApplication from a JSON string
gallery_application_instance = GalleryApplication.from_json(json)
# print the JSON string representation of the object
print(GalleryApplication.to_json())

# convert the object into a dict
gallery_application_dict = gallery_application_instance.to_dict()
# create an instance of GalleryApplication from a dict
gallery_application_from_dict = GalleryApplication.from_dict(gallery_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


