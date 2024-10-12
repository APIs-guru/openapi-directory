# ProximityLocationListAssignedTargetingOptionDetails

Targeting details for proximity location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PROXIMITY_LOCATION_LIST`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proximity_location_list_id** | **str** | Required. ID of the proximity location list. Should refer to the location_list_id field of a LocationList resource whose type is &#x60;TARGETING_LOCATION_TYPE_PROXIMITY&#x60;. | [optional] 
**proximity_radius** | **float** | Required. Radius expressed in the distance units set in proximity_radius_unit. This represents the size of the area around a chosen location that will be targeted. Radius should be between 1 and 500 miles or 800 kilometers. | [optional] 
**proximity_radius_unit** | **str** | Required. Radius distance units. | [optional] 

## Example

```python
from openapi_client.models.proximity_location_list_assigned_targeting_option_details import ProximityLocationListAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProximityLocationListAssignedTargetingOptionDetails from a JSON string
proximity_location_list_assigned_targeting_option_details_instance = ProximityLocationListAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ProximityLocationListAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
proximity_location_list_assigned_targeting_option_details_dict = proximity_location_list_assigned_targeting_option_details_instance.to_dict()
# create an instance of ProximityLocationListAssignedTargetingOptionDetails from a dict
proximity_location_list_assigned_targeting_option_details_from_dict = ProximityLocationListAssignedTargetingOptionDetails.from_dict(proximity_location_list_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


