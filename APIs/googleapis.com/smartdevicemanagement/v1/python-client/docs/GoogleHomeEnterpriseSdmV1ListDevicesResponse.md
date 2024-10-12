# GoogleHomeEnterpriseSdmV1ListDevicesResponse

Response message for SmartDeviceManagementService.ListDevices

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[GoogleHomeEnterpriseSdmV1Device]**](GoogleHomeEnterpriseSdmV1Device.md) | The list of devices. | [optional] 

## Example

```python
from openapi_client.models.google_home_enterprise_sdm_v1_list_devices_response import GoogleHomeEnterpriseSdmV1ListDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleHomeEnterpriseSdmV1ListDevicesResponse from a JSON string
google_home_enterprise_sdm_v1_list_devices_response_instance = GoogleHomeEnterpriseSdmV1ListDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleHomeEnterpriseSdmV1ListDevicesResponse.to_json())

# convert the object into a dict
google_home_enterprise_sdm_v1_list_devices_response_dict = google_home_enterprise_sdm_v1_list_devices_response_instance.to_dict()
# create an instance of GoogleHomeEnterpriseSdmV1ListDevicesResponse from a dict
google_home_enterprise_sdm_v1_list_devices_response_from_dict = GoogleHomeEnterpriseSdmV1ListDevicesResponse.from_dict(google_home_enterprise_sdm_v1_list_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


