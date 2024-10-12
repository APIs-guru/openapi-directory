# RelativeDateRange

A relative date range, specified by an offset and a duration. The supported range of dates begins 30 days before today and ends today, for example, the limits for these values are: offset_days >= 0 duration_days >= 1 offset_days + duration_days <= 30

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration_days** | **int** | The number of days in the requested date range, for example, for a range spanning today: 1. For a range spanning the last 7 days: 7. | [optional] 
**offset_days** | **int** | The end date of the filter set, specified as the number of days before today, for example, for a range where the last date is today: 0. | [optional] 

## Example

```python
from openapi_client.models.relative_date_range import RelativeDateRange

# TODO update the JSON string below
json = "{}"
# create an instance of RelativeDateRange from a JSON string
relative_date_range_instance = RelativeDateRange.from_json(json)
# print the JSON string representation of the object
print(RelativeDateRange.to_json())

# convert the object into a dict
relative_date_range_dict = relative_date_range_instance.to_dict()
# create an instance of RelativeDateRange from a dict
relative_date_range_from_dict = RelativeDateRange.from_dict(relative_date_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


