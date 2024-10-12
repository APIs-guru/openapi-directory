# TimeDimension

The dimension for which data is divided over.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_week** | **str** | The day of the week (\&quot;MONDAY\&quot; to \&quot;SUNDAY\&quot;) this value corresponds to. Set for BREAKDOWN_DAY_OF_WEEK option. | [optional] 
**time_of_day** | [**TimeOfDay**](TimeOfDay.md) |  | [optional] 
**time_range** | [**TimeRange**](TimeRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.time_dimension import TimeDimension

# TODO update the JSON string below
json = "{}"
# create an instance of TimeDimension from a JSON string
time_dimension_instance = TimeDimension.from_json(json)
# print the JSON string representation of the object
print(TimeDimension.to_json())

# convert the object into a dict
time_dimension_dict = time_dimension_instance.to_dict()
# create an instance of TimeDimension from a dict
time_dimension_from_dict = TimeDimension.from_dict(time_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


