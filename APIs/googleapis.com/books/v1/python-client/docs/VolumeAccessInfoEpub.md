# VolumeAccessInfoEpub

Information about epub content. (In LITE projection.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acs_token_link** | **str** | URL to retrieve ACS token for epub download. (In LITE projection.) | [optional] 
**download_link** | **str** | URL to download epub. (In LITE projection.) | [optional] 
**is_available** | **bool** | Is a flowing text epub available either as public domain or for purchase. (In LITE projection.) | [optional] 

## Example

```python
from openapi_client.models.volume_access_info_epub import VolumeAccessInfoEpub

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeAccessInfoEpub from a JSON string
volume_access_info_epub_instance = VolumeAccessInfoEpub.from_json(json)
# print the JSON string representation of the object
print(VolumeAccessInfoEpub.to_json())

# convert the object into a dict
volume_access_info_epub_dict = volume_access_info_epub_instance.to_dict()
# create an instance of VolumeAccessInfoEpub from a dict
volume_access_info_epub_from_dict = VolumeAccessInfoEpub.from_dict(volume_access_info_epub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


