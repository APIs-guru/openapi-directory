# ParentalStatusAssignedTargetingOptionDetails

Details for assigned parental status targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_PARENTAL_STATUS`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parental_status** | **str** | Required. The parental status of the audience. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60;. | [optional] 

## Example

```python
from openapi_client.models.parental_status_assigned_targeting_option_details import ParentalStatusAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ParentalStatusAssignedTargetingOptionDetails from a JSON string
parental_status_assigned_targeting_option_details_instance = ParentalStatusAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(ParentalStatusAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
parental_status_assigned_targeting_option_details_dict = parental_status_assigned_targeting_option_details_instance.to_dict()
# create an instance of ParentalStatusAssignedTargetingOptionDetails from a dict
parental_status_assigned_targeting_option_details_from_dict = ParentalStatusAssignedTargetingOptionDetails.from_dict(parental_status_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


