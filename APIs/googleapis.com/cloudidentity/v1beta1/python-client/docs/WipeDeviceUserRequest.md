# WipeDeviceUserRequest

Request message for starting an account wipe on device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use &#x60;customers/my_customer&#x60; If you&#39;re using this API to manage another organization, use &#x60;customers/{customer_id}&#x60;, where customer_id is the customer to whom the device belongs. | [optional] 

## Example

```python
from openapi_client.models.wipe_device_user_request import WipeDeviceUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of WipeDeviceUserRequest from a JSON string
wipe_device_user_request_instance = WipeDeviceUserRequest.from_json(json)
# print the JSON string representation of the object
print(WipeDeviceUserRequest.to_json())

# convert the object into a dict
wipe_device_user_request_dict = wipe_device_user_request_instance.to_dict()
# create an instance of WipeDeviceUserRequest from a dict
wipe_device_user_request_from_dict = WipeDeviceUserRequest.from_dict(wipe_device_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


