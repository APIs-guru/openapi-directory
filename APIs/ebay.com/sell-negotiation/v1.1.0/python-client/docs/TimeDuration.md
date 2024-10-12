# TimeDuration

A complex type that specifies a period of time using a specified time-measurement unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** | A time-measurement unit that specifies a singular period of time. A span of time is defined when you apply the value specified in the value field to the value specified for unit. Time-measurement units can be YEAR, MONTH, DAY, and so on. See TimeDurationUnitEnum for a complete list of possible time-measurement units. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/sell/negotiation/types/bas:TimeDurationUnitEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 
**value** | **int** | An integer that represents an amount of time, as measured by the time-measurement unit specified in the unit field. | [optional] 

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


