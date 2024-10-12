# BindDeviceToGatewayRequest

Request for `BindDeviceToGateway`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Required. The device to associate with the specified gateway. The value of &#x60;device_id&#x60; can be either the device numeric ID or the user-defined device identifier. | [optional] 
**gateway_id** | **str** | Required. The value of &#x60;gateway_id&#x60; can be either the device numeric ID or the user-defined device identifier. | [optional] 

## Example

```python
from openapi_client.models.bind_device_to_gateway_request import BindDeviceToGatewayRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BindDeviceToGatewayRequest from a JSON string
bind_device_to_gateway_request_instance = BindDeviceToGatewayRequest.from_json(json)
# print the JSON string representation of the object
print(BindDeviceToGatewayRequest.to_json())

# convert the object into a dict
bind_device_to_gateway_request_dict = bind_device_to_gateway_request_instance.to_dict()
# create an instance of BindDeviceToGatewayRequest from a dict
bind_device_to_gateway_request_from_dict = BindDeviceToGatewayRequest.from_dict(bind_device_to_gateway_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


