# DeviceType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**airflow** | [**Airflow**](Airflow.md) |  | [optional] 
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
**manufacturer** | [**NestedManufacturer**](NestedManufacturer.md) |  | 
**model** | **str** |  | 
**part_number** | **str** | Discrete part number (optional) | [optional] 
**rear_image** | **str** |  | [optional] [readonly] 
**slug** | **str** |  | 
**subdevice_role** | [**SubdeviceRole**](SubdeviceRole.md) |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**u_height** | **float** |  | [optional] [default to 1]
**url** | **str** |  | [optional] [readonly] 
**weight** | **float** |  | [optional] 
**weight_unit** | [**WeightUnit**](WeightUnit.md) |  | [optional] 

## Example

```python
from openapi_client.models.device_type import DeviceType

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceType from a JSON string
device_type_instance = DeviceType.from_json(json)
# print the JSON string representation of the object
print(DeviceType.to_json())

# convert the object into a dict
device_type_dict = device_type_instance.to_dict()
# create an instance of DeviceType from a dict
device_type_from_dict = DeviceType.from_dict(device_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


