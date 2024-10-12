# DayPartTargeting

Specifies the day part targeting criteria.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_parts** | [**List[DayPart]**](DayPart.md) | A list of day part targeting criterion. | [optional] 
**time_zone_type** | **str** | The timezone to use for interpreting the day part targeting. | [optional] 

## Example

```python
from openapi_client.models.day_part_targeting import DayPartTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of DayPartTargeting from a JSON string
day_part_targeting_instance = DayPartTargeting.from_json(json)
# print the JSON string representation of the object
print(DayPartTargeting.to_json())

# convert the object into a dict
day_part_targeting_dict = day_part_targeting_instance.to_dict()
# create an instance of DayPartTargeting from a dict
day_part_targeting_from_dict = DayPartTargeting.from_dict(day_part_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


