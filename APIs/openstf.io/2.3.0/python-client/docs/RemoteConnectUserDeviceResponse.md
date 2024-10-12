# RemoteConnectUserDeviceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_connect_url** | **str** |  | 
**serial** | **str** |  | 

## Example

```python
from openapi_client.models.remote_connect_user_device_response import RemoteConnectUserDeviceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteConnectUserDeviceResponse from a JSON string
remote_connect_user_device_response_instance = RemoteConnectUserDeviceResponse.from_json(json)
# print the JSON string representation of the object
print(RemoteConnectUserDeviceResponse.to_json())

# convert the object into a dict
remote_connect_user_device_response_dict = remote_connect_user_device_response_instance.to_dict()
# create an instance of RemoteConnectUserDeviceResponse from a dict
remote_connect_user_device_response_from_dict = RemoteConnectUserDeviceResponse.from_dict(remote_connect_user_device_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


