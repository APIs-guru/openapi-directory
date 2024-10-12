# ListDeviceSessionsResponse

A list of device sessions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_sessions** | [**List[DeviceSession]**](DeviceSession.md) | The sessions matching the specified filter in the given cloud project. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_device_sessions_response import ListDeviceSessionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDeviceSessionsResponse from a JSON string
list_device_sessions_response_instance = ListDeviceSessionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDeviceSessionsResponse.to_json())

# convert the object into a dict
list_device_sessions_response_dict = list_device_sessions_response_instance.to_dict()
# create an instance of ListDeviceSessionsResponse from a dict
list_device_sessions_response_from_dict = ListDeviceSessionsResponse.from_dict(list_device_sessions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


