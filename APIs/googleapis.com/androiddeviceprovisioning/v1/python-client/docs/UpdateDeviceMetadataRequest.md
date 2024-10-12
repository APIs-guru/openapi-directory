# UpdateDeviceMetadataRequest

Request to set metadata for a device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_metadata** | [**DeviceMetadata**](DeviceMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_device_metadata_request import UpdateDeviceMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceMetadataRequest from a JSON string
update_device_metadata_request_instance = UpdateDeviceMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceMetadataRequest.to_json())

# convert the object into a dict
update_device_metadata_request_dict = update_device_metadata_request_instance.to_dict()
# create an instance of UpdateDeviceMetadataRequest from a dict
update_device_metadata_request_from_dict = UpdateDeviceMetadataRequest.from_dict(update_device_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


