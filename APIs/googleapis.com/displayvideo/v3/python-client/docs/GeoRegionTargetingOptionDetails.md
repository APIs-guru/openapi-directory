# GeoRegionTargetingOptionDetails

Represents a targetable geographic region. This will be populated in the geo_region_details field when targeting_type is `TARGETING_TYPE_GEO_REGION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the geographic region (e.g., \&quot;Ontario, Canada\&quot;). | [optional] [readonly] 
**geo_region_type** | **str** | Output only. The type of geographic region targeting. | [optional] [readonly] 

## Example

```python
from openapi_client.models.geo_region_targeting_option_details import GeoRegionTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GeoRegionTargetingOptionDetails from a JSON string
geo_region_targeting_option_details_instance = GeoRegionTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(GeoRegionTargetingOptionDetails.to_json())

# convert the object into a dict
geo_region_targeting_option_details_dict = geo_region_targeting_option_details_instance.to_dict()
# create an instance of GeoRegionTargetingOptionDetails from a dict
geo_region_targeting_option_details_from_dict = GeoRegionTargetingOptionDetails.from_dict(geo_region_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


