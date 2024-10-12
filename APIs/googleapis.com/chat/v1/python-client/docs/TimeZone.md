# TimeZone

The timezone ID and offset from Coordinated Universal Time (UTC). Only supported for the event types [`CARD_CLICKED`](https://developers.google.com/chat/api/reference/rest/v1/EventType#ENUM_VALUES.CARD_CLICKED) and [`SUBMIT_DIALOG`](https://developers.google.com/chat/api/reference/rest/v1/DialogEventType#ENUM_VALUES.SUBMIT_DIALOG).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The [IANA TZ](https://www.iana.org/time-zones) time zone database code, such as \&quot;America/Toronto\&quot;. | [optional] 
**offset** | **int** | The user timezone offset, in milliseconds, from Coordinated Universal Time (UTC). | [optional] 

## Example

```python
from openapi_client.models.time_zone import TimeZone

# TODO update the JSON string below
json = "{}"
# create an instance of TimeZone from a JSON string
time_zone_instance = TimeZone.from_json(json)
# print the JSON string representation of the object
print(TimeZone.to_json())

# convert the object into a dict
time_zone_dict = time_zone_instance.to_dict()
# create an instance of TimeZone from a dict
time_zone_from_dict = TimeZone.from_dict(time_zone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


