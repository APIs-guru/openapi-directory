# Module

Binary module.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_id** | [**TruncatableString**](TruncatableString.md) |  | [optional] 
**module** | [**TruncatableString**](TruncatableString.md) |  | [optional] 

## Example

```python
from openapi_client.models.module import Module

# TODO update the JSON string below
json = "{}"
# create an instance of Module from a JSON string
module_instance = Module.from_json(json)
# print the JSON string representation of the object
print(Module.to_json())

# convert the object into a dict
module_dict = module_instance.to_dict()
# create an instance of Module from a dict
module_from_dict = Module.from_dict(module_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


