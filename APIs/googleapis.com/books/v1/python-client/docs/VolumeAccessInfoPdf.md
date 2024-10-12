# VolumeAccessInfoPdf

Information about pdf content. (In LITE projection.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acs_token_link** | **str** | URL to retrieve ACS token for pdf download. (In LITE projection.) | [optional] 
**download_link** | **str** | URL to download pdf. (In LITE projection.) | [optional] 
**is_available** | **bool** | Is a scanned image pdf available either as public domain or for purchase. (In LITE projection.) | [optional] 

## Example

```python
from openapi_client.models.volume_access_info_pdf import VolumeAccessInfoPdf

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeAccessInfoPdf from a JSON string
volume_access_info_pdf_instance = VolumeAccessInfoPdf.from_json(json)
# print the JSON string representation of the object
print(VolumeAccessInfoPdf.to_json())

# convert the object into a dict
volume_access_info_pdf_dict = volume_access_info_pdf_instance.to_dict()
# create an instance of VolumeAccessInfoPdf from a dict
volume_access_info_pdf_from_dict = VolumeAccessInfoPdf.from_dict(volume_access_info_pdf_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


