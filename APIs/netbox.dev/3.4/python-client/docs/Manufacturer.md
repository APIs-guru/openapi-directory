# Manufacturer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**devicetype_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**inventoryitem_count** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**platform_count** | **int** |  | [optional] [readonly] 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.manufacturer import Manufacturer

# TODO update the JSON string below
json = "{}"
# create an instance of Manufacturer from a JSON string
manufacturer_instance = Manufacturer.from_json(json)
# print the JSON string representation of the object
print(Manufacturer.to_json())

# convert the object into a dict
manufacturer_dict = manufacturer_instance.to_dict()
# create an instance of Manufacturer from a dict
manufacturer_from_dict = Manufacturer.from_dict(manufacturer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


