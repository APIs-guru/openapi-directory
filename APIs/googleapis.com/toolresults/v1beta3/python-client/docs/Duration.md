# Duration

 A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like \"day\" or \"month\". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nanos** | **int** | Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 &#x60;seconds&#x60; field and a positive or negative &#x60;nanos&#x60; field. For durations of one second or more, a non-zero value for the &#x60;nanos&#x60; field must be of the same sign as the &#x60;seconds&#x60; field. Must be from -999,999,999 to +999,999,999 inclusive. | [optional] 
**seconds** | **str** | Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min * 60 min/hr * 24 hr/day * 365.25 days/year * 10000 years | [optional] 

## Example

```python
from openapi_client.models.duration import Duration

# TODO update the JSON string below
json = "{}"
# create an instance of Duration from a JSON string
duration_instance = Duration.from_json(json)
# print the JSON string representation of the object
print(Duration.to_json())

# convert the object into a dict
duration_dict = duration_instance.to_dict()
# create an instance of Duration from a dict
duration_from_dict = Duration.from_dict(duration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


