# DeviceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_date** | **datetime** |  | [optional] 
**device_class** | **str** |  | [optional] 
**model** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**platform** | [**BundleIdPlatform**](BundleIdPlatform.md) |  | [optional] 
**status** | **str** |  | [optional] 
**udid** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.device_attributes import DeviceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceAttributes from a JSON string
device_attributes_instance = DeviceAttributes.from_json(json)
# print the JSON string representation of the object
print(DeviceAttributes.to_json())

# convert the object into a dict
device_attributes_dict = device_attributes_instance.to_dict()
# create an instance of DeviceAttributes from a dict
device_attributes_from_dict = DeviceAttributes.from_dict(device_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


