# DevicesGetReleaseUpdateDevicesStatus200Response

The status of the resign operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Error code for any error that occured during the resigning operation. | [optional] 
**error_message** | **str** | Error message for any error that occured during the resigning operation. | [optional] 
**status** | **str** | The status of the resign | 

## Example

```python
from openapi_client.models.devices_get_release_update_devices_status200_response import DevicesGetReleaseUpdateDevicesStatus200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DevicesGetReleaseUpdateDevicesStatus200Response from a JSON string
devices_get_release_update_devices_status200_response_instance = DevicesGetReleaseUpdateDevicesStatus200Response.from_json(json)
# print the JSON string representation of the object
print(DevicesGetReleaseUpdateDevicesStatus200Response.to_json())

# convert the object into a dict
devices_get_release_update_devices_status200_response_dict = devices_get_release_update_devices_status200_response_instance.to_dict()
# create an instance of DevicesGetReleaseUpdateDevicesStatus200Response from a dict
devices_get_release_update_devices_status200_response_from_dict = DevicesGetReleaseUpdateDevicesStatus200Response.from_dict(devices_get_release_update_devices_status200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


