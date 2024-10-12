# DeviceRegistrationUrl

The url that can be navigated to in order to start the device registration process.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**registration_url** | **str** | The url that can be navigated to in order to start the device registration process. | 

## Example

```python
from openapi_client.models.device_registration_url import DeviceRegistrationUrl

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceRegistrationUrl from a JSON string
device_registration_url_instance = DeviceRegistrationUrl.from_json(json)
# print the JSON string representation of the object
print(DeviceRegistrationUrl.to_json())

# convert the object into a dict
device_registration_url_dict = device_registration_url_instance.to_dict()
# create an instance of DeviceRegistrationUrl from a dict
device_registration_url_from_dict = DeviceRegistrationUrl.from_dict(device_registration_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


