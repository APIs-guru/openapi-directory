# PublishDevicesRequest

The publising information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_service_connection_id** | **str** | The service_connection_id of the stored Apple credentials instead of username, password. | [optional] 
**devices** | **List[str]** | Array of device UDID&#39;s to be published to the Apple Developer account. | [optional] 
**password** | **str** | The password for the Apple Developer account to publish the devices to. | [optional] 
**publish_all_devices** | **bool** | When set to true, all unprovisioned devices will be published to the Apple Developer account.  When false, only the provided devices will be published to the Apple Developer account. | [optional] 
**username** | **str** | The username for the Apple Developer account to publish the devices to. | [optional] 

## Example

```python
from openapi_client.models.publish_devices_request import PublishDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PublishDevicesRequest from a JSON string
publish_devices_request_instance = PublishDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(PublishDevicesRequest.to_json())

# convert the object into a dict
publish_devices_request_dict = publish_devices_request_instance.to_dict()
# create an instance of PublishDevicesRequest from a dict
publish_devices_request_from_dict = PublishDevicesRequest.from_dict(publish_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


