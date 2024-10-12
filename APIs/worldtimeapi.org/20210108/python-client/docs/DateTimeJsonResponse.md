# DateTimeJsonResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abbreviation** | **str** | the abbreviated name of the timezone | 
**client_ip** | **str** | the IP of the client making the request | 
**datetime** | **str** | an ISO8601-valid string representing the current, local date/time | 
**day_of_week** | **int** | current day number of the week, where sunday is 0 | 
**day_of_year** | **int** | ordinal date of the current year | 
**dst** | **bool** | flag indicating whether the local time is in daylight savings | 
**dst_from** | **str** | an ISO8601-valid string representing the datetime when daylight savings started for this timezone | [optional] 
**dst_offset** | **int** | the difference in seconds between the current local time and daylight saving time for the location | 
**dst_until** | **str** | an ISO8601-valid string representing the datetime when daylight savings will end for this timezone | [optional] 
**raw_offset** | **int** | the difference in seconds between the current local time and the time in UTC, excluding any daylight saving difference (see dst_offset) | [optional] 
**timezone** | **str** | timezone in &#x60;Area/Location&#x60; or &#x60;Area/Location/Region&#x60; format | 
**unixtime** | **int** | number of seconds since the Epoch | 
**utc_datetime** | **str** | an ISO8601-valid string representing the current date/time in UTC | 
**utc_offset** | **str** | an ISO8601-valid string representing the offset from UTC | 
**week_number** | **int** | the current week number | 

## Example

```python
from openapi_client.models.date_time_json_response import DateTimeJsonResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeJsonResponse from a JSON string
date_time_json_response_instance = DateTimeJsonResponse.from_json(json)
# print the JSON string representation of the object
print(DateTimeJsonResponse.to_json())

# convert the object into a dict
date_time_json_response_dict = date_time_json_response_instance.to_dict()
# create an instance of DateTimeJsonResponse from a dict
date_time_json_response_from_dict = DateTimeJsonResponse.from_dict(date_time_json_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


