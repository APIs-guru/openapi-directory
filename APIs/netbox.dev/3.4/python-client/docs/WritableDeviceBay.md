# WritableDeviceBay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | **int** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**installed_device** | **int** |  | [optional] 
**label** | **str** | Physical label | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_device_bay import WritableDeviceBay

# TODO update the JSON string below
json = "{}"
# create an instance of WritableDeviceBay from a JSON string
writable_device_bay_instance = WritableDeviceBay.from_json(json)
# print the JSON string representation of the object
print(WritableDeviceBay.to_json())

# convert the object into a dict
writable_device_bay_dict = writable_device_bay_instance.to_dict()
# create an instance of WritableDeviceBay from a dict
writable_device_bay_from_dict = WritableDeviceBay.from_dict(writable_device_bay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


