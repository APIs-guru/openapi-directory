# ApproveDeviceUserRequest

Request message for approving the device to access user data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Optional. [Resource name](https://cloud.google.com/apis/design/resource_names) of the customer. If you&#39;re using this API for your own organization, use &#x60;customers/my_customer&#x60; If you&#39;re using this API to manage another organization, use &#x60;customers/{customer_id}&#x60;, where customer_id is the customer to whom the device belongs. | [optional] 

## Example

```python
from openapi_client.models.approve_device_user_request import ApproveDeviceUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApproveDeviceUserRequest from a JSON string
approve_device_user_request_instance = ApproveDeviceUserRequest.from_json(json)
# print the JSON string representation of the object
print(ApproveDeviceUserRequest.to_json())

# convert the object into a dict
approve_device_user_request_dict = approve_device_user_request_instance.to_dict()
# create an instance of ApproveDeviceUserRequest from a dict
approve_device_user_request_from_dict = ApproveDeviceUserRequest.from_dict(approve_device_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


