# GalleryApplicationVersionList

The List Gallery Application version operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of gallery Application Versions. Call ListNext() with this to fetch the next page of gallery Application Versions. | [optional] 
**value** | [**List[GalleryApplicationVersion]**](GalleryApplicationVersion.md) | A list of gallery Application Versions. | 

## Example

```python
from openapi_client.models.gallery_application_version_list import GalleryApplicationVersionList

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryApplicationVersionList from a JSON string
gallery_application_version_list_instance = GalleryApplicationVersionList.from_json(json)
# print the JSON string representation of the object
print(GalleryApplicationVersionList.to_json())

# convert the object into a dict
gallery_application_version_list_dict = gallery_application_version_list_instance.to_dict()
# create an instance of GalleryApplicationVersionList from a dict
gallery_application_version_list_from_dict = GalleryApplicationVersionList.from_dict(gallery_application_version_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


