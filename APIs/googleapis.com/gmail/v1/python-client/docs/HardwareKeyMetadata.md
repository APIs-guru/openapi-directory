# HardwareKeyMetadata

Metadata for hardware keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description about the hardware key. | [optional] 

## Example

```python
from openapi_client.models.hardware_key_metadata import HardwareKeyMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of HardwareKeyMetadata from a JSON string
hardware_key_metadata_instance = HardwareKeyMetadata.from_json(json)
# print the JSON string representation of the object
print(HardwareKeyMetadata.to_json())

# convert the object into a dict
hardware_key_metadata_dict = hardware_key_metadata_instance.to_dict()
# create an instance of HardwareKeyMetadata from a dict
hardware_key_metadata_from_dict = HardwareKeyMetadata.from_dict(hardware_key_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


