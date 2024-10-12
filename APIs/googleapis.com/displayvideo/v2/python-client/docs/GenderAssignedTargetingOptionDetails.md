# GenderAssignedTargetingOptionDetails

Details for assigned gender targeting option. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_GENDER`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gender** | **str** | Required. The gender of the audience. | [optional] 

## Example

```python
from openapi_client.models.gender_assigned_targeting_option_details import GenderAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GenderAssignedTargetingOptionDetails from a JSON string
gender_assigned_targeting_option_details_instance = GenderAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(GenderAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
gender_assigned_targeting_option_details_dict = gender_assigned_targeting_option_details_instance.to_dict()
# create an instance of GenderAssignedTargetingOptionDetails from a dict
gender_assigned_targeting_option_details_from_dict = GenderAssignedTargetingOptionDetails.from_dict(gender_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


