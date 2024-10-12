# TargetingValueDayPartTargeting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_parts** | [**List[TargetingValueDayPartTargetingDayPart]**](TargetingValueDayPartTargetingDayPart.md) |  | [optional] 
**time_zone_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.targeting_value_day_part_targeting import TargetingValueDayPartTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingValueDayPartTargeting from a JSON string
targeting_value_day_part_targeting_instance = TargetingValueDayPartTargeting.from_json(json)
# print the JSON string representation of the object
print(TargetingValueDayPartTargeting.to_json())

# convert the object into a dict
targeting_value_day_part_targeting_dict = targeting_value_day_part_targeting_instance.to_dict()
# create an instance of TargetingValueDayPartTargeting from a dict
targeting_value_day_part_targeting_from_dict = TargetingValueDayPartTargeting.from_dict(targeting_value_day_part_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


