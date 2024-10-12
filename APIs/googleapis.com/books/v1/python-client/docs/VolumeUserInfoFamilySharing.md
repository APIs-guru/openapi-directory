# VolumeUserInfoFamilySharing

Information on the ability to share with the family.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family_role** | **str** | The role of the user in the family. | [optional] 
**is_sharing_allowed** | **bool** | Whether or not this volume can be shared with the family by the user. This includes sharing eligibility of both the volume and the user. If the value is true, the user can initiate a family sharing action. | [optional] 
**is_sharing_disabled_by_fop** | **bool** | Whether or not sharing this volume is temporarily disabled due to issues with the Family Wallet. | [optional] 

## Example

```python
from openapi_client.models.volume_user_info_family_sharing import VolumeUserInfoFamilySharing

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeUserInfoFamilySharing from a JSON string
volume_user_info_family_sharing_instance = VolumeUserInfoFamilySharing.from_json(json)
# print the JSON string representation of the object
print(VolumeUserInfoFamilySharing.to_json())

# convert the object into a dict
volume_user_info_family_sharing_dict = volume_user_info_family_sharing_instance.to_dict()
# create an instance of VolumeUserInfoFamilySharing from a dict
volume_user_info_family_sharing_from_dict = VolumeUserInfoFamilySharing.from_dict(volume_user_info_family_sharing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


