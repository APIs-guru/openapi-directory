# SpecialHours

Represents a set of time periods when a location's operational hours differ from its normal business hours.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**special_hour_periods** | [**List[SpecialHourPeriod]**](SpecialHourPeriod.md) | A list of exceptions to the business&#39;s regular hours. | [optional] 

## Example

```python
from openapi_client.models.special_hours import SpecialHours

# TODO update the JSON string below
json = "{}"
# create an instance of SpecialHours from a JSON string
special_hours_instance = SpecialHours.from_json(json)
# print the JSON string representation of the object
print(SpecialHours.to_json())

# convert the object into a dict
special_hours_dict = special_hours_instance.to_dict()
# create an instance of SpecialHours from a dict
special_hours_from_dict = SpecialHours.from_dict(special_hours_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


