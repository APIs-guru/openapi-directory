# AgeRangeTargetingOptionDetails

Represents a targetable age range. This will be populated in the age_range_details field when targeting_type is `TARGETING_TYPE_AGE_RANGE`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**age_range** | **str** | Output only. The age range of an audience. | [optional] [readonly] 

## Example

```python
from openapi_client.models.age_range_targeting_option_details import AgeRangeTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AgeRangeTargetingOptionDetails from a JSON string
age_range_targeting_option_details_instance = AgeRangeTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AgeRangeTargetingOptionDetails.to_json())

# convert the object into a dict
age_range_targeting_option_details_dict = age_range_targeting_option_details_instance.to_dict()
# create an instance of AgeRangeTargetingOptionDetails from a dict
age_range_targeting_option_details_from_dict = AgeRangeTargetingOptionDetails.from_dict(age_range_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


