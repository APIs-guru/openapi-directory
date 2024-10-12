# DeviceCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**platform** | [**BundleIdPlatform**](BundleIdPlatform.md) |  | 
**udid** | **str** |  | 

## Example

```python
from openapi_client.models.device_create_request_data_attributes import DeviceCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceCreateRequestDataAttributes from a JSON string
device_create_request_data_attributes_instance = DeviceCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(DeviceCreateRequestDataAttributes.to_json())

# convert the object into a dict
device_create_request_data_attributes_dict = device_create_request_data_attributes_instance.to_dict()
# create an instance of DeviceCreateRequestDataAttributes from a dict
device_create_request_data_attributes_from_dict = DeviceCreateRequestDataAttributes.from_dict(device_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


