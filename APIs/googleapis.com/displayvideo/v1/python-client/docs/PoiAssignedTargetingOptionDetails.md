# PoiAssignedTargetingOptionDetails

Details for assigned POI targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_POI`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of a POI, e.g. \&quot;Times Square\&quot;, \&quot;Space Needle\&quot;, followed by its full address if available. | [optional] [readonly] 
**latitude** | **float** | Output only. Latitude of the POI rounding to 6th decimal place. | [optional] [readonly] 
**longitude** | **float** | Output only. Longitude of the POI rounding to 6th decimal place. | [optional] [readonly] 
**proximity_radius_amount** | **float** | Required. The radius of the area around the POI that will be targeted. The units of the radius are specified by proximity_radius_unit. Must be 1 to 800 if unit is &#x60;DISTANCE_UNIT_KILOMETERS&#x60; and 1 to 500 if unit is &#x60;DISTANCE_UNIT_MILES&#x60;. | [optional] 
**proximity_radius_unit** | **str** | Required. The unit of distance by which the targeting radius is measured. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_POI&#x60;. Accepted POI targeting option IDs can be retrieved using &#x60;targetingTypes.targetingOptions.search&#x60;. If targeting a specific latitude/longitude coordinate removed from an address or POI name, you can generate the necessary targeting option ID by rounding the desired coordinate values to the 6th decimal place, removing the decimals, and concatenating the string values separated by a semicolon. For example, you can target the latitude/longitude pair of 40.7414691, -74.003387 using the targeting option ID \&quot;40741469;-74003387\&quot;. **Upon** **creation, this field value will be updated to append a semicolon and** **alphanumerical hash value if only latitude/longitude coordinates are** **provided.** | [optional] 

## Example

```python
from openapi_client.models.poi_assigned_targeting_option_details import PoiAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PoiAssignedTargetingOptionDetails from a JSON string
poi_assigned_targeting_option_details_instance = PoiAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(PoiAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
poi_assigned_targeting_option_details_dict = poi_assigned_targeting_option_details_instance.to_dict()
# create an instance of PoiAssignedTargetingOptionDetails from a dict
poi_assigned_targeting_option_details_from_dict = PoiAssignedTargetingOptionDetails.from_dict(poi_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


