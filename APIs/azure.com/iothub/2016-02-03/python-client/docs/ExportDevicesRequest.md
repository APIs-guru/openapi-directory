# ExportDevicesRequest

Use to provide parameters when requesting an export of all devices in the IoT hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_keys** | **bool** | The value indicating whether keys should be excluded during export. | 
**export_blob_container_uri** | **str** | The export blob container URI. | 

## Example

```python
from openapi_client.models.export_devices_request import ExportDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportDevicesRequest from a JSON string
export_devices_request_instance = ExportDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(ExportDevicesRequest.to_json())

# convert the object into a dict
export_devices_request_dict = export_devices_request_instance.to_dict()
# create an instance of ExportDevicesRequest from a dict
export_devices_request_from_dict = ExportDevicesRequest.from_dict(export_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


