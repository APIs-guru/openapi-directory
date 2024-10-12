# DeviceBay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | [**NestedDevice**](NestedDevice.md) |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**installed_device** | [**NestedDevice**](NestedDevice.md) |  | [optional] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.device_bay import DeviceBay

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceBay from a JSON string
device_bay_instance = DeviceBay.from_json(json)
# print the JSON string representation of the object
print(DeviceBay.to_json())

# convert the object into a dict
device_bay_dict = device_bay_instance.to_dict()
# create an instance of DeviceBay from a dict
device_bay_from_dict = DeviceBay.from_dict(device_bay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


