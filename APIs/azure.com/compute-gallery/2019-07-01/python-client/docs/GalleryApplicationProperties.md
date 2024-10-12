# GalleryApplicationProperties

Describes the properties of a gallery Application Definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of this gallery Application Definition resource. This property is updatable. | [optional] 
**end_of_life_date** | **datetime** | The end of life date of the gallery Application Definition. This property can be used for decommissioning purposes. This property is updatable. | [optional] 
**eula** | **str** | The Eula agreement for the gallery Application Definition. | [optional] 
**privacy_statement_uri** | **str** | The privacy statement uri. | [optional] 
**release_note_uri** | **str** | The release note uri. | [optional] 
**supported_os_type** | **str** | This property allows you to specify the supported type of the OS that application is built for. &lt;br&gt;&lt;br&gt; Possible values are: &lt;br&gt;&lt;br&gt; **Windows** &lt;br&gt;&lt;br&gt; **Linux** | 

## Example

```python
from openapi_client.models.gallery_application_properties import GalleryApplicationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryApplicationProperties from a JSON string
gallery_application_properties_instance = GalleryApplicationProperties.from_json(json)
# print the JSON string representation of the object
print(GalleryApplicationProperties.to_json())

# convert the object into a dict
gallery_application_properties_dict = gallery_application_properties_instance.to_dict()
# create an instance of GalleryApplicationProperties from a dict
gallery_application_properties_from_dict = GalleryApplicationProperties.from_dict(gallery_application_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


