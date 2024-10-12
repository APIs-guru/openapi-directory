# CustomerUnclaimDeviceRequest

Request message for customer to unclaim a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**DeviceReference**](DeviceReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_unclaim_device_request import CustomerUnclaimDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerUnclaimDeviceRequest from a JSON string
customer_unclaim_device_request_instance = CustomerUnclaimDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(CustomerUnclaimDeviceRequest.to_json())

# convert the object into a dict
customer_unclaim_device_request_dict = customer_unclaim_device_request_instance.to_dict()
# create an instance of CustomerUnclaimDeviceRequest from a dict
customer_unclaim_device_request_from_dict = CustomerUnclaimDeviceRequest.from_dict(customer_unclaim_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


