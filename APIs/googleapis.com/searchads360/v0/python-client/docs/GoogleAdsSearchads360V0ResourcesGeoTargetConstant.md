# GoogleAdsSearchads360V0ResourcesGeoTargetConstant

A geo target constant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_name** | **str** | Output only. The fully qualified English name, consisting of the target&#39;s name and that of its parent and country. | [optional] [readonly] 
**country_code** | **str** | Output only. The ISO-3166-1 alpha-2 country code that is associated with the target. | [optional] [readonly] 
**id** | **str** | Output only. The ID of the geo target constant. | [optional] [readonly] 
**name** | **str** | Output only. Geo target constant English name. | [optional] [readonly] 
**parent_geo_target** | **str** | Output only. The resource name of the parent geo target constant. Geo target constant resource names have the form: &#x60;geoTargetConstants/{parent_geo_target_constant_id}&#x60; | [optional] [readonly] 
**resource_name** | **str** | Output only. The resource name of the geo target constant. Geo target constant resource names have the form: &#x60;geoTargetConstants/{geo_target_constant_id}&#x60; | [optional] [readonly] 
**status** | **str** | Output only. Geo target constant status. | [optional] [readonly] 
**target_type** | **str** | Output only. Geo target constant target type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_geo_target_constant import GoogleAdsSearchads360V0ResourcesGeoTargetConstant

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesGeoTargetConstant from a JSON string
google_ads_searchads360_v0_resources_geo_target_constant_instance = GoogleAdsSearchads360V0ResourcesGeoTargetConstant.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesGeoTargetConstant.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_geo_target_constant_dict = google_ads_searchads360_v0_resources_geo_target_constant_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesGeoTargetConstant from a dict
google_ads_searchads360_v0_resources_geo_target_constant_from_dict = GoogleAdsSearchads360V0ResourcesGeoTargetConstant.from_dict(google_ads_searchads360_v0_resources_geo_target_constant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


