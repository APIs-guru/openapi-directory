# UpdateDevicesRequest

Information required to publish devices to the Apple Developer account and resign the application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_service_connection_id** | **str** | The service_connection_id of the stored Apple credentials instead of username, password. | [optional] 
**destinations** | [**List[UpdateDevicesRequestDestinationsInner]**](UpdateDevicesRequestDestinationsInner.md) | Array of distribution groups that the devices should be provisioned from. | [optional] 
**devices** | **List[str]** | Array of device UDID&#39;s to be published to the Apple Developer account. | [optional] 
**p12_base64** | **str** | The certificate to use for resigning the application with the updated provisioning profiles. | [optional] 
**p12_password** | **str** | The password certificate if one is needed. | [optional] 
**p12_service_connection_id** | **str** | The service_connection_id of the stored Apple certificate instead of p12_base64 value. | [optional] 
**password** | **str** | The password for the Apple Developer account to publish the devices to. | [optional] 
**publish_all_devices** | **bool** | When set to true, all unprovisioned devices will be published to the Apple Developer account.  When false, only the provided devices will be published to the Apple Developer account. | [optional] 
**release_id** | **float** | When provided, will update the provided release with the new set of devices. By default the latest release of the distribution group is used when this property is omitted. If &#x60;release_id&#x60; is passed in the path, there is no need to pass in the body as well. | [optional] 
**username** | **str** | The username for the Apple Developer account to publish the devices to. | [optional] 

## Example

```python
from openapi_client.models.update_devices_request import UpdateDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDevicesRequest from a JSON string
update_devices_request_instance = UpdateDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDevicesRequest.to_json())

# convert the object into a dict
update_devices_request_dict = update_devices_request_instance.to_dict()
# create an instance of UpdateDevicesRequest from a dict
update_devices_request_from_dict = UpdateDevicesRequest.from_dict(update_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


