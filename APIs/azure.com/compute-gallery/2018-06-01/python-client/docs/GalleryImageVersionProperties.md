# GalleryImageVersionProperties

Describes the properties of a gallery Image Version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state, which only appears in the response. | [optional] [readonly] 
**publishing_profile** | [**GalleryImageVersionPublishingProfile**](GalleryImageVersionPublishingProfile.md) |  | 
**replication_status** | [**ReplicationStatus**](ReplicationStatus.md) |  | [optional] 
**storage_profile** | [**GalleryImageVersionStorageProfile**](GalleryImageVersionStorageProfile.md) |  | [optional] 

## Example

```python
from openapi_client.models.gallery_image_version_properties import GalleryImageVersionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GalleryImageVersionProperties from a JSON string
gallery_image_version_properties_instance = GalleryImageVersionProperties.from_json(json)
# print the JSON string representation of the object
print(GalleryImageVersionProperties.to_json())

# convert the object into a dict
gallery_image_version_properties_dict = gallery_image_version_properties_instance.to_dict()
# create an instance of GalleryImageVersionProperties from a dict
gallery_image_version_properties_from_dict = GalleryImageVersionProperties.from_dict(gallery_image_version_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


