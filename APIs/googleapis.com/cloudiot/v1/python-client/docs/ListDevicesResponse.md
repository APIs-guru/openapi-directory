# ListDevicesResponse

Response for `ListDevices`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[Device]**](Device.md) | The devices that match the request. | [optional] 
**next_page_token** | **str** | If not empty, indicates that there may be more devices that match the request; this value should be passed in a new &#x60;ListDevicesRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.list_devices_response import ListDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDevicesResponse from a JSON string
list_devices_response_instance = ListDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(ListDevicesResponse.to_json())

# convert the object into a dict
list_devices_response_dict = list_devices_response_instance.to_dict()
# create an instance of ListDevicesResponse from a dict
list_devices_response_from_dict = ListDevicesResponse.from_dict(list_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


