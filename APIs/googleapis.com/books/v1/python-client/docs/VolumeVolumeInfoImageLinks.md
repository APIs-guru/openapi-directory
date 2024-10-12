# VolumeVolumeInfoImageLinks

A list of image links for all the sizes that are available. (In LITE projection.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extra_large** | **str** | Image link for extra large size (width of ~1280 pixels). (In LITE projection) | [optional] 
**large** | **str** | Image link for large size (width of ~800 pixels). (In LITE projection) | [optional] 
**medium** | **str** | Image link for medium size (width of ~575 pixels). (In LITE projection) | [optional] 
**small** | **str** | Image link for small size (width of ~300 pixels). (In LITE projection) | [optional] 
**small_thumbnail** | **str** | Image link for small thumbnail size (width of ~80 pixels). (In LITE projection) | [optional] 
**thumbnail** | **str** | Image link for thumbnail size (width of ~128 pixels). (In LITE projection) | [optional] 

## Example

```python
from openapi_client.models.volume_volume_info_image_links import VolumeVolumeInfoImageLinks

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeVolumeInfoImageLinks from a JSON string
volume_volume_info_image_links_instance = VolumeVolumeInfoImageLinks.from_json(json)
# print the JSON string representation of the object
print(VolumeVolumeInfoImageLinks.to_json())

# convert the object into a dict
volume_volume_info_image_links_dict = volume_volume_info_image_links_instance.to_dict()
# create an instance of VolumeVolumeInfoImageLinks from a dict
volume_volume_info_image_links_from_dict = VolumeVolumeInfoImageLinks.from_dict(volume_volume_info_image_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


