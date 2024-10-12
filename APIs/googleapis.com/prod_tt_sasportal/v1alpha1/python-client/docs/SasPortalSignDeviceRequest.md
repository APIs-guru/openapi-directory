# SasPortalSignDeviceRequest

Request for SignDevice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device** | [**SasPortalDevice**](SasPortalDevice.md) |  | [optional] 

## Example

```python
from openapi_client.models.sas_portal_sign_device_request import SasPortalSignDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalSignDeviceRequest from a JSON string
sas_portal_sign_device_request_instance = SasPortalSignDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalSignDeviceRequest.to_json())

# convert the object into a dict
sas_portal_sign_device_request_dict = sas_portal_sign_device_request_instance.to_dict()
# create an instance of SasPortalSignDeviceRequest from a dict
sas_portal_sign_device_request_from_dict = SasPortalSignDeviceRequest.from_dict(sas_portal_sign_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


