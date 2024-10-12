# RemoveNetworkDevicesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serial** | **str** | The serial of a device | 

## Example

```python
from openapi_client.models.remove_network_devices_request import RemoveNetworkDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveNetworkDevicesRequest from a JSON string
remove_network_devices_request_instance = RemoveNetworkDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveNetworkDevicesRequest.to_json())

# convert the object into a dict
remove_network_devices_request_dict = remove_network_devices_request_instance.to_dict()
# create an instance of RemoveNetworkDevicesRequest from a dict
remove_network_devices_request_from_dict = RemoveNetworkDevicesRequest.from_dict(remove_network_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


