# DeviceMetadata

Metadata entries that can be attached to a `Device`. To learn more, read [Device metadata](https://developers.google.com/zero-touch/guides/metadata).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | **Dict[str, str]** | Metadata entries recorded as key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.device_metadata import DeviceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceMetadata from a JSON string
device_metadata_instance = DeviceMetadata.from_json(json)
# print the JSON string representation of the object
print(DeviceMetadata.to_json())

# convert the object into a dict
device_metadata_dict = device_metadata_instance.to_dict()
# create an instance of DeviceMetadata from a dict
device_metadata_from_dict = DeviceMetadata.from_dict(device_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


