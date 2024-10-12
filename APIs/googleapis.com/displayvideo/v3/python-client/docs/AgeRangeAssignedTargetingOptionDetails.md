# AgeRangeAssignedTargetingOptionDetails

Represents a targetable age range. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AGE_RANGE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_range** | **str** | Required. The age range of an audience. We only support targeting a continuous age range of an audience. Thus, the age range represented in this field can be 1) targeted solely, or, 2) part of a larger continuous age range. The reach of a continuous age range targeting can be expanded by also targeting an audience of an unknown age. | [optional] 

## Example

```python
from openapi_client.models.age_range_assigned_targeting_option_details import AgeRangeAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AgeRangeAssignedTargetingOptionDetails from a JSON string
age_range_assigned_targeting_option_details_instance = AgeRangeAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AgeRangeAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
age_range_assigned_targeting_option_details_dict = age_range_assigned_targeting_option_details_instance.to_dict()
# create an instance of AgeRangeAssignedTargetingOptionDetails from a dict
age_range_assigned_targeting_option_details_from_dict = AgeRangeAssignedTargetingOptionDetails.from_dict(age_range_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


