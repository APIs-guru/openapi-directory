# TimeDuration

The type that defines the fields for a period of time in the time-measurement units supplied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | An enumeration value that indicates the units (such as hours) of the time span. The enumeration value in this field defines the period of time being used to measure the duration. Valid Values: YEAR, MONTH, DAY, HOUR, CALENDAR_DAY, BUSINESS_DAY, MINUTE, SECOND, or MILLISECOND Code so that your app gracefully handles any future changes to this list. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/ba:TimeDurationUnitEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **int** | Retrieves the duration of the time span (no units).The value in this field indicates the number of years, months, days, hours, or minutes in the defined period. | [optional] 

## Example

```python
from openapi_client.models.time_duration import TimeDuration

# TODO update the JSON string below
json = "{}"
# create an instance of TimeDuration from a JSON string
time_duration_instance = TimeDuration.from_json(json)
# print the JSON string representation of the object
print(TimeDuration.to_json())

# convert the object into a dict
time_duration_dict = time_duration_instance.to_dict()
# create an instance of TimeDuration from a dict
time_duration_from_dict = TimeDuration.from_dict(time_duration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


