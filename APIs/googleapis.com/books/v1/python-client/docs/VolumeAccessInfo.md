# VolumeAccessInfo

Any information about a volume related to reading or obtaining that volume text. This information can depend on country (books may be public domain in one country but not in another, e.g.).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_view_status** | **str** | Combines the access and viewability of this volume into a single status field for this user. Values can be FULL_PURCHASED, FULL_PUBLIC_DOMAIN, SAMPLE or NONE. (In LITE projection.) | [optional] 
**country** | **str** | The two-letter ISO_3166-1 country code for which this access information is valid. (In LITE projection.) | [optional] 
**download_access** | [**DownloadAccessRestriction**](DownloadAccessRestriction.md) |  | [optional] 
**drive_imported_content_link** | **str** | URL to the Google Drive viewer if this volume is uploaded by the user by selecting the file from Google Drive. | [optional] 
**embeddable** | **bool** | Whether this volume can be embedded in a viewport using the Embedded Viewer API. | [optional] 
**epub** | [**VolumeAccessInfoEpub**](VolumeAccessInfoEpub.md) |  | [optional] 
**explicit_offline_license_management** | **bool** | Whether this volume requires that the client explicitly request offline download license rather than have it done automatically when loading the content, if the client supports it. | [optional] 
**pdf** | [**VolumeAccessInfoPdf**](VolumeAccessInfoPdf.md) |  | [optional] 
**public_domain** | **bool** | Whether or not this book is public domain in the country listed above. | [optional] 
**quote_sharing_allowed** | **bool** | Whether quote sharing is allowed for this volume. | [optional] 
**text_to_speech_permission** | **str** | Whether text-to-speech is permitted for this volume. Values can be ALLOWED, ALLOWED_FOR_ACCESSIBILITY, or NOT_ALLOWED. | [optional] 
**view_order_url** | **str** | For ordered but not yet processed orders, we give a URL that can be used to go to the appropriate Google Wallet page. | [optional] 
**viewability** | **str** | The read access of a volume. Possible values are PARTIAL, ALL_PAGES, NO_PAGES or UNKNOWN. This value depends on the country listed above. A value of PARTIAL means that the publisher has allowed some portion of the volume to be viewed publicly, without purchase. This can apply to eBooks as well as non-eBooks. Public domain books will always have a value of ALL_PAGES. | [optional] 
**web_reader_link** | **str** | URL to read this volume on the Google Books site. Link will not allow users to read non-viewable volumes. | [optional] 

## Example

```python
from openapi_client.models.volume_access_info import VolumeAccessInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeAccessInfo from a JSON string
volume_access_info_instance = VolumeAccessInfo.from_json(json)
# print the JSON string representation of the object
print(VolumeAccessInfo.to_json())

# convert the object into a dict
volume_access_info_dict = volume_access_info_instance.to_dict()
# create an instance of VolumeAccessInfo from a dict
volume_access_info_from_dict = VolumeAccessInfo.from_dict(volume_access_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


