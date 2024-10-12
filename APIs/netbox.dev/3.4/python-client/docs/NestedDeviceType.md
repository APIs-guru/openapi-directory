# NestedDeviceType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**manufacturer** | [**NestedManufacturer**](NestedManufacturer.md) |  | [optional] 
**model** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_device_type import NestedDeviceType

# TODO update the JSON string below
json = "{}"
# create an instance of NestedDeviceType from a JSON string
nested_device_type_instance = NestedDeviceType.from_json(json)
# print the JSON string representation of the object
print(NestedDeviceType.to_json())

# convert the object into a dict
nested_device_type_dict = nested_device_type_instance.to_dict()
# create an instance of NestedDeviceType from a dict
nested_device_type_from_dict = NestedDeviceType.from_dict(nested_device_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


