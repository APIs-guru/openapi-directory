# CreateDeviceLiveToolsPingDeviceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count parameter to pass to ping. [1..5], default 5 | [optional] 

## Example

```python
from openapi_client.models.create_device_live_tools_ping_device_request import CreateDeviceLiveToolsPingDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceLiveToolsPingDeviceRequest from a JSON string
create_device_live_tools_ping_device_request_instance = CreateDeviceLiveToolsPingDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceLiveToolsPingDeviceRequest.to_json())

# convert the object into a dict
create_device_live_tools_ping_device_request_dict = create_device_live_tools_ping_device_request_instance.to_dict()
# create an instance of CreateDeviceLiveToolsPingDeviceRequest from a dict
create_device_live_tools_ping_device_request_from_dict = CreateDeviceLiveToolsPingDeviceRequest.from_dict(create_device_live_tools_ping_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


