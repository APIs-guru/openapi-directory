# SasPortalUpdateSignedDeviceRequest

Request for UpdateSignedDevice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoded_device** | **bytearray** | Required. The JSON Web Token signed using a CPI private key. Payload must be the JSON encoding of the device. The user_id field must be set. | [optional] 
**installer_id** | **str** | Required. Unique installer ID (CPI ID) from the Certified Professional Installers database. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_update_signed_device_request import SasPortalUpdateSignedDeviceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalUpdateSignedDeviceRequest from a JSON string
sas_portal_update_signed_device_request_instance = SasPortalUpdateSignedDeviceRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalUpdateSignedDeviceRequest.to_json())

# convert the object into a dict
sas_portal_update_signed_device_request_dict = sas_portal_update_signed_device_request_instance.to_dict()
# create an instance of SasPortalUpdateSignedDeviceRequest from a dict
sas_portal_update_signed_device_request_from_dict = SasPortalUpdateSignedDeviceRequest.from_dict(sas_portal_update_signed_device_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


