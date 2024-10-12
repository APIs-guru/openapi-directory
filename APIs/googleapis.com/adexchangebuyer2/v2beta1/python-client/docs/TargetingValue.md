# TargetingValue

A polymorphic targeting value used as part of Shared Targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_size_value** | [**CreativeSize**](CreativeSize.md) |  | [optional] 
**day_part_targeting_value** | [**DayPartTargeting**](DayPartTargeting.md) |  | [optional] 
**long_value** | **str** | The long value to include/exclude. | [optional] 
**string_value** | **str** | The string value to include/exclude. | [optional] 

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


