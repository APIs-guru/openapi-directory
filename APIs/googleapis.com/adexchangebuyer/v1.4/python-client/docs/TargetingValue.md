# TargetingValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_size_value** | [**TargetingValueCreativeSize**](TargetingValueCreativeSize.md) |  | [optional] 
**day_part_targeting_value** | [**TargetingValueDayPartTargeting**](TargetingValueDayPartTargeting.md) |  | [optional] 
**demog_age_criteria_value** | [**TargetingValueDemogAgeCriteria**](TargetingValueDemogAgeCriteria.md) |  | [optional] 
**demog_gender_criteria_value** | [**TargetingValueDemogGenderCriteria**](TargetingValueDemogGenderCriteria.md) |  | [optional] 
**long_value** | **str** | The long value to exclude/include. | [optional] 
**request_platform_targeting_value** | [**TargetingValueRequestPlatformTargeting**](TargetingValueRequestPlatformTargeting.md) |  | [optional] 
**string_value** | **str** | The string value to exclude/include. | [optional] 

## Example

```python
from openapi_client.models.targeting_value import TargetingValue

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingValue from a JSON string
targeting_value_instance = TargetingValue.from_json(json)
# print the JSON string representation of the object
print(TargetingValue.to_json())

# convert the object into a dict
targeting_value_dict = targeting_value_instance.to_dict()
# create an instance of TargetingValue from a dict
targeting_value_from_dict = TargetingValue.from_dict(targeting_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


