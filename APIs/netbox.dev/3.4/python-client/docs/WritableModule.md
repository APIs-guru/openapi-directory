# WritableModule


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_tag** | **str** | A unique tag used to identify this device | [optional] 
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**device** | **int** |  | 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**module_bay** | **int** |  | 
**module_type** | **int** |  | 
**serial** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_module import WritableModule

# TODO update the JSON string below
json = "{}"
# create an instance of WritableModule from a JSON string
writable_module_instance = WritableModule.from_json(json)
# print the JSON string representation of the object
print(WritableModule.to_json())

# convert the object into a dict
writable_module_dict = writable_module_instance.to_dict()
# create an instance of WritableModule from a dict
writable_module_from_dict = WritableModule.from_dict(writable_module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


