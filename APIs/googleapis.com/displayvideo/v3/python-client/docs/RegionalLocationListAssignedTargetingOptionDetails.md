# RegionalLocationListAssignedTargetingOptionDetails

Targeting details for regional location list. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_REGIONAL_LOCATION_LIST`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 
**regional_location_list_id** | **str** | Required. ID of the regional location list. Should refer to the location_list_id field of a LocationList resource whose type is &#x60;TARGETING_LOCATION_TYPE_REGIONAL&#x60;. | [optional] 

## Example

```python
from openapi_client.models.regional_location_list_assigned_targeting_option_details import RegionalLocationListAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RegionalLocationListAssignedTargetingOptionDetails from a JSON string
regional_location_list_assigned_targeting_option_details_instance = RegionalLocationListAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(RegionalLocationListAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
regional_location_list_assigned_targeting_option_details_dict = regional_location_list_assigned_targeting_option_details_instance.to_dict()
# create an instance of RegionalLocationListAssignedTargetingOptionDetails from a dict
regional_location_list_assigned_targeting_option_details_from_dict = RegionalLocationListAssignedTargetingOptionDetails.from_dict(regional_location_list_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


