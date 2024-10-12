# DeviceCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**DeviceCreateRequestData**](DeviceCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.device_create_request import DeviceCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCreateRequest from a JSON string
device_create_request_instance = DeviceCreateRequest.from_json(json)
# print the JSON string representation of the object
print(DeviceCreateRequest.to_json())

# convert the object into a dict
device_create_request_dict = device_create_request_instance.to_dict()
# create an instance of DeviceCreateRequest from a dict
device_create_request_from_dict = DeviceCreateRequest.from_dict(device_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


