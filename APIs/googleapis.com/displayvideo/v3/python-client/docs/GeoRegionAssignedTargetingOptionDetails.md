# GeoRegionAssignedTargetingOptionDetails

Details for assigned geographic region targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GEO_REGION`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the geographic region (e.g., \&quot;Ontario, Canada\&quot;). | [optional] [readonly] 
**geo_region_type** | **str** | Output only. The type of geographic region targeting. | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_GEO_REGION&#x60;. | [optional] 

## Example

```python
from openapi_client.models.geo_region_assigned_targeting_option_details import GeoRegionAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GeoRegionAssignedTargetingOptionDetails from a JSON string
geo_region_assigned_targeting_option_details_instance = GeoRegionAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(GeoRegionAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
geo_region_assigned_targeting_option_details_dict = geo_region_assigned_targeting_option_details_instance.to_dict()
# create an instance of GeoRegionAssignedTargetingOptionDetails from a dict
geo_region_assigned_targeting_option_details_from_dict = GeoRegionAssignedTargetingOptionDetails.from_dict(geo_region_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


