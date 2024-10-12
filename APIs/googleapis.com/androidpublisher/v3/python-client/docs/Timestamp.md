# Timestamp

A Timestamp represents a point in time independent of any time zone or local calendar, encoded as a count of seconds and fractions of seconds at nanosecond resolution. The count is relative to an epoch at UTC midnight on January 1, 1970.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nanos** | **int** | Non-negative fractions of a second at nanosecond resolution. Must be from 0 to 999,999,999 inclusive. | [optional] 
**seconds** | **str** | Represents seconds of UTC time since Unix epoch. | [optional] 

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


