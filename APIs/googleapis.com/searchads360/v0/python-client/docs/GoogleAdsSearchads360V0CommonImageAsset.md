# GoogleAdsSearchads360V0CommonImageAsset

An Image asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_size** | **str** | File size of the image asset in bytes. | [optional] 
**full_size** | [**GoogleAdsSearchads360V0CommonImageDimension**](GoogleAdsSearchads360V0CommonImageDimension.md) |  | [optional] 
**mime_type** | **str** | MIME type of the image asset. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_common_image_asset import GoogleAdsSearchads360V0CommonImageAsset

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0CommonImageAsset from a JSON string
google_ads_searchads360_v0_common_image_asset_instance = GoogleAdsSearchads360V0CommonImageAsset.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0CommonImageAsset.to_json())

# convert the object into a dict
google_ads_searchads360_v0_common_image_asset_dict = google_ads_searchads360_v0_common_image_asset_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0CommonImageAsset from a dict
google_ads_searchads360_v0_common_image_asset_from_dict = GoogleAdsSearchads360V0CommonImageAsset.from_dict(google_ads_searchads360_v0_common_image_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


