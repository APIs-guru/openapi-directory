# DeviceFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Device ID | [optional] 
**push_provider** | **str** |  | [optional] 
**push_provider_name** | **str** | Name of the push provider configuration | [optional] 

## Example

```python
from openapi_client.models.device_fields import DeviceFields

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceFields from a JSON string
device_fields_instance = DeviceFields.from_json(json)
# print the JSON string representation of the object
print(DeviceFields.to_json())

# convert the object into a dict
device_fields_dict = device_fields_instance.to_dict()
# create an instance of DeviceFields from a dict
device_fields_from_dict = DeviceFields.from_dict(device_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


