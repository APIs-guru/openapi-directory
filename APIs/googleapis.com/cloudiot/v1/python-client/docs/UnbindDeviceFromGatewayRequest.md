# UnbindDeviceFromGatewayRequest

Request for `UnbindDeviceFromGateway`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Required. The device to disassociate from the specified gateway. The value of &#x60;device_id&#x60; can be either the device numeric ID or the user-defined device identifier. | [optional] 
**gateway_id** | **str** | Required. The value of &#x60;gateway_id&#x60; can be either the device numeric ID or the user-defined device identifier. | [optional] 

## Example

```python
from openapi_client.models.unbind_device_from_gateway_request import UnbindDeviceFromGatewayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UnbindDeviceFromGatewayRequest from a JSON string
unbind_device_from_gateway_request_instance = UnbindDeviceFromGatewayRequest.from_json(json)
# print the JSON string representation of the object
print(UnbindDeviceFromGatewayRequest.to_json())

# convert the object into a dict
unbind_device_from_gateway_request_dict = unbind_device_from_gateway_request_instance.to_dict()
# create an instance of UnbindDeviceFromGatewayRequest from a dict
unbind_device_from_gateway_request_from_dict = UnbindDeviceFromGatewayRequest.from_dict(unbind_device_from_gateway_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


