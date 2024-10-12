# Timestamp

A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970, in the proleptic Gregorian calendar which extends the Gregorian calendar backwards to year one. All minutes are 60 seconds long. Leap seconds are \"smeared\" so that no leap second table is needed for interpretation, using a [24-hour linear smear](https://developers.google.com/time/smear). The range is from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59.999999999Z. By restricting to that range, we ensure that we can convert to and from [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) date strings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nanos** | **int** | Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive. | [optional] 
**seconds** | **str** | Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive. | [optional] 

## Example

```python
from openapi_client.models.timestamp import Timestamp

# TODO update the JSON string below
json = "{}"
# create an instance of Timestamp from a JSON string
timestamp_instance = Timestamp.from_json(json)
# print the JSON string representation of the object
print(Timestamp.to_json())

# convert the object into a dict
timestamp_dict = timestamp_instance.to_dict()
# create an instance of Timestamp from a dict
timestamp_from_dict = Timestamp.from_dict(timestamp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


