# NestedModuleBay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**module** | [**NestedModule**](NestedModule.md) |  | [optional] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_module_bay import NestedModuleBay

# TODO update the JSON string below
json = "{}"
# create an instance of NestedModuleBay from a JSON string
nested_module_bay_instance = NestedModuleBay.from_json(json)
# print the JSON string representation of the object
print(NestedModuleBay.to_json())

# convert the object into a dict
nested_module_bay_dict = nested_module_bay_instance.to_dict()
# create an instance of NestedModuleBay from a dict
nested_module_bay_from_dict = NestedModuleBay.from_dict(nested_module_bay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


