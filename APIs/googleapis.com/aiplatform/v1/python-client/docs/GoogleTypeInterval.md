# GoogleTypeInterval

Represents a time interval, encoded as a Timestamp start (inclusive) and a Timestamp end (exclusive). The start must be less than or equal to the end. When the start equals the end, the interval is empty (matches no time). When both start and end are unspecified, the interval matches any time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. | [optional] 
**start_time** | **str** | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. | [optional] 

## Example

```python
from openapi_client.models.google_type_interval import GoogleTypeInterval

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleTypeInterval from a JSON string
google_type_interval_instance = GoogleTypeInterval.from_json(json)
# print the JSON string representation of the object
print(GoogleTypeInterval.to_json())

# convert the object into a dict
google_type_interval_dict = google_type_interval_instance.to_dict()
# create an instance of GoogleTypeInterval from a dict
google_type_interval_from_dict = GoogleTypeInterval.from_dict(google_type_interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


