# GalleryApplicationList

The List Gallery Applications operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of Application Definitions in the Application Gallery. Call ListNext() with this to fetch the next page of gallery Application Definitions. | [optional] 
**value** | [**List[GalleryApplication]**](GalleryApplication.md) | A list of Gallery Applications. | 

## Example

```python
from openapi_client.models.gallery_application_list import GalleryApplicationList

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryApplicationList from a JSON string
gallery_application_list_instance = GalleryApplicationList.from_json(json)
# print the JSON string representation of the object
print(GalleryApplicationList.to_json())

# convert the object into a dict
gallery_application_list_dict = gallery_application_list_instance.to_dict()
# create an instance of GalleryApplicationList from a dict
gallery_application_list_from_dict = GalleryApplicationList.from_dict(gallery_application_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


