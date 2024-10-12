# FreeBusyResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calendars** | [**Dict[str, FreeBusyCalendar]**](FreeBusyCalendar.md) | List of free/busy information for calendars. | [optional] 
**groups** | [**Dict[str, FreeBusyGroup]**](FreeBusyGroup.md) | Expansion of groups. | [optional] 
**kind** | **str** | Type of the resource (\&quot;calendar#freeBusy\&quot;). | [optional] [default to 'calendar#freeBusy']
**time_max** | **datetime** | The end of the interval. | [optional] 
**time_min** | **datetime** | The start of the interval. | [optional] 

## Example

```python
from openapi_client.models.free_busy_response import FreeBusyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FreeBusyResponse from a JSON string
free_busy_response_instance = FreeBusyResponse.from_json(json)
# print the JSON string representation of the object
print(FreeBusyResponse.to_json())

# convert the object into a dict
free_busy_response_dict = free_busy_response_instance.to_dict()
# create an instance of FreeBusyResponse from a dict
free_busy_response_from_dict = FreeBusyResponse.from_dict(free_busy_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


