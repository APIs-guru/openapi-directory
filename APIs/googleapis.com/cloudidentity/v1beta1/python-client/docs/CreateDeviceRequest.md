# CreateDeviceRequest

Request message for creating a Company Owned device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use &#x60;customers/my_customer&#x60; If you&#39;re using this API to manage another organization, use &#x60;customers/{customer_id}&#x60;, where customer_id is the customer to whom the device belongs. | [optional] 
**device** | [**Device**](Device.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_device_request import CreateDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeviceRequest from a JSON string
create_device_request_instance = CreateDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDeviceRequest.to_json())

# convert the object into a dict
create_device_request_dict = create_device_request_instance.to_dict()
# create an instance of CreateDeviceRequest from a dict
create_device_request_from_dict = CreateDeviceRequest.from_dict(create_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


