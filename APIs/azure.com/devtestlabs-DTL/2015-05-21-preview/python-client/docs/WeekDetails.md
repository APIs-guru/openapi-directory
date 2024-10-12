# WeekDetails

Properties of a weekly schedule.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **str** | The time of the day. | [optional] 
**weekdays** | **List[str]** | The days of the week. | [optional] 

## Example

```python
from openapi_client.models.week_details import WeekDetails

# TODO update the JSON string below
json = "{}"
# create an instance of WeekDetails from a JSON string
week_details_instance = WeekDetails.from_json(json)
# print the JSON string representation of the object
print(WeekDetails.to_json())

# convert the object into a dict
week_details_dict = week_details_instance.to_dict()
# create an instance of WeekDetails from a dict
week_details_from_dict = WeekDetails.from_dict(week_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


