# ImportDevicesRequest

Use to provide parameters when requesting an import of all devices in the hub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_blob_container_uri** | **str** | The input blob container URI. | 
**output_blob_container_uri** | **str** | The output blob container URI. | 

## Example

```python
from openapi_client.models.import_devices_request import ImportDevicesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ImportDevicesRequest from a JSON string
import_devices_request_instance = ImportDevicesRequest.from_json(json)
# print the JSON string representation of the object
print(ImportDevicesRequest.to_json())

# convert the object into a dict
import_devices_request_dict = import_devices_request_instance.to_dict()
# create an instance of ImportDevicesRequest from a dict
import_devices_request_from_dict = ImportDevicesRequest.from_dict(import_devices_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


