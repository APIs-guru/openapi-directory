# DeviceUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DeviceUpdateRequestData**](DeviceUpdateRequestData.md) |  | 

## Example

```python
from openapi_client.models.device_update_request import DeviceUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceUpdateRequest from a JSON string
device_update_request_instance = DeviceUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(DeviceUpdateRequest.to_json())

# convert the object into a dict
device_update_request_dict = device_update_request_instance.to_dict()
# create an instance of DeviceUpdateRequest from a dict
device_update_request_from_dict = DeviceUpdateRequest.from_dict(device_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


