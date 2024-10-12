# GoogleTypeTimeZone

Represents a time zone from the [IANA Time Zone Database](https://www.iana.org/time-zones).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | IANA Time Zone Database time zone, e.g. \&quot;America/New_York\&quot;. | [optional] 
**version** | **str** | Optional. IANA Time Zone Database version number, e.g. \&quot;2019a\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_type_time_zone import GoogleTypeTimeZone

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleTypeTimeZone from a JSON string
google_type_time_zone_instance = GoogleTypeTimeZone.from_json(json)
# print the JSON string representation of the object
print(GoogleTypeTimeZone.to_json())

# convert the object into a dict
google_type_time_zone_dict = google_type_time_zone_instance.to_dict()
# create an instance of GoogleTypeTimeZone from a dict
google_type_time_zone_from_dict = GoogleTypeTimeZone.from_dict(google_type_time_zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


