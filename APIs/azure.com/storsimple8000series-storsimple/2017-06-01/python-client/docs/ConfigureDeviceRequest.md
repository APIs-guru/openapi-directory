# ConfigureDeviceRequest

The mandatory device configuration request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ConfigureDeviceRequestProperties**](ConfigureDeviceRequestProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configure_device_request import ConfigureDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigureDeviceRequest from a JSON string
configure_device_request_instance = ConfigureDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(ConfigureDeviceRequest.to_json())

# convert the object into a dict
configure_device_request_dict = configure_device_request_instance.to_dict()
# create an instance of ConfigureDeviceRequest from a dict
configure_device_request_from_dict = ConfigureDeviceRequest.from_dict(configure_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


