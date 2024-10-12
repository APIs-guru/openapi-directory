# VolumeUserInfo

User specific information related to this volume. (e.g. page this user last read or whether they purchased this book)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acquired_time** | **str** | Timestamp when this volume was acquired by the user. (RFC 3339 UTC date-time format) Acquiring includes purchase, user upload, receiving family sharing, etc. | [optional] 
**acquisition_type** | **int** | How this volume was acquired. | [optional] 
**copy** | [**VolumeUserInfoCopy**](VolumeUserInfoCopy.md) |  | [optional] 
**entitlement_type** | **int** | Whether this volume is purchased, sample, pd download etc. | [optional] 
**family_sharing** | [**VolumeUserInfoFamilySharing**](VolumeUserInfoFamilySharing.md) |  | [optional] 
**is_family_shared_from_user** | **bool** | Whether or not the user shared this volume with the family. | [optional] 
**is_family_shared_to_user** | **bool** | Whether or not the user received this volume through family sharing. | [optional] 
**is_family_sharing_allowed** | **bool** | Deprecated: Replaced by familySharing. | [optional] 
**is_family_sharing_disabled_by_fop** | **bool** | Deprecated: Replaced by familySharing. | [optional] 
**is_in_my_books** | **bool** | Whether or not this volume is currently in \&quot;my books.\&quot; | [optional] 
**is_preordered** | **bool** | Whether or not this volume was pre-ordered by the authenticated user making the request. (In LITE projection.) | [optional] 
**is_purchased** | **bool** | Whether or not this volume was purchased by the authenticated user making the request. (In LITE projection.) | [optional] 
**is_uploaded** | **bool** | Whether or not this volume was user uploaded. | [optional] 
**reading_position** | [**ReadingPosition**](ReadingPosition.md) |  | [optional] 
**rental_period** | [**VolumeUserInfoRentalPeriod**](VolumeUserInfoRentalPeriod.md) |  | [optional] 
**rental_state** | **str** | Whether this book is an active or an expired rental. | [optional] 
**review** | [**Review**](Review.md) |  | [optional] 
**updated** | **str** | Timestamp when this volume was last modified by a user action, such as a reading position update, volume purchase or writing a review. (RFC 3339 UTC date-time format). | [optional] 
**user_uploaded_volume_info** | [**VolumeUserInfoUserUploadedVolumeInfo**](VolumeUserInfoUserUploadedVolumeInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.volume_user_info import VolumeUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeUserInfo from a JSON string
volume_user_info_instance = VolumeUserInfo.from_json(json)
# print the JSON string representation of the object
print(VolumeUserInfo.to_json())

# convert the object into a dict
volume_user_info_dict = volume_user_info_instance.to_dict()
# create an instance of VolumeUserInfo from a dict
volume_user_info_from_dict = VolumeUserInfo.from_dict(volume_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


