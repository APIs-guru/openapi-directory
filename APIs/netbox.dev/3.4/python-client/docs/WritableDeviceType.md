# WritableDeviceType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airflow** | **str** |  | [optional] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**front_image** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**is_full_depth** | **bool** | Device consumes both front and rear rack faces | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**manufacturer** | **int** |  | 
**model** | **str** |  | 
**part_number** | **str** | Discrete part number (optional) | [optional] 
**rear_image** | **str** |  | [optional] [readonly] 
**slug** | **str** |  | 
**subdevice_role** | **str** | Parent devices house child devices in device bays. Leave blank if this device type is neither a parent nor a child. | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**u_height** | **float** |  | [optional] [default to 1]
**url** | **str** |  | [optional] [readonly] 
**weight** | **float** |  | [optional] 
**weight_unit** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.writable_device_type import WritableDeviceType

# TODO update the JSON string below
json = "{}"
# create an instance of WritableDeviceType from a JSON string
writable_device_type_instance = WritableDeviceType.from_json(json)
# print the JSON string representation of the object
print(WritableDeviceType.to_json())

# convert the object into a dict
writable_device_type_dict = writable_device_type_instance.to_dict()
# create an instance of WritableDeviceType from a dict
writable_device_type_from_dict = WritableDeviceType.from_dict(writable_device_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


