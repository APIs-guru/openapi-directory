# GoogleAdsSearchads360V0ResourcesAssetGroupSignal

AssetGroupSignal represents a signal in an asset group. The existence of a signal tells the performance max campaign who's most likely to convert. Performance Max uses the signal to look for new people with similar or stronger intent to find conversions across Search, Display, Video, and more.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_group** | **str** | Immutable. The asset group which this asset group signal belongs to. | [optional] 
**audience** | [**GoogleAdsSearchads360V0CommonAudienceInfo**](GoogleAdsSearchads360V0CommonAudienceInfo.md) |  | [optional] 
**resource_name** | **str** | Immutable. The resource name of the asset group signal. Asset group signal resource name have the form: &#x60;customers/{customer_id}/assetGroupSignals/{asset_group_id}~{signal_id}&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_asset_group_signal import GoogleAdsSearchads360V0ResourcesAssetGroupSignal

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroupSignal from a JSON string
google_ads_searchads360_v0_resources_asset_group_signal_instance = GoogleAdsSearchads360V0ResourcesAssetGroupSignal.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesAssetGroupSignal.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_asset_group_signal_dict = google_ads_searchads360_v0_resources_asset_group_signal_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesAssetGroupSignal from a dict
google_ads_searchads360_v0_resources_asset_group_signal_from_dict = GoogleAdsSearchads360V0ResourcesAssetGroupSignal.from_dict(google_ads_searchads360_v0_resources_asset_group_signal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


