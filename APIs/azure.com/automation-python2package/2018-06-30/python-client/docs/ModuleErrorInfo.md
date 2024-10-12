# ModuleErrorInfo

Definition of the module error info type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Gets or sets the error code. | [optional] 
**message** | **str** | Gets or sets the error message. | [optional] 

## Example

```python
from openapi_client.models.module_error_info import ModuleErrorInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ModuleErrorInfo from a JSON string
module_error_info_instance = ModuleErrorInfo.from_json(json)
# print the JSON string representation of the object
print(ModuleErrorInfo.to_json())

# convert the object into a dict
module_error_info_dict = module_error_info_instance.to_dict()
# create an instance of ModuleErrorInfo from a dict
module_error_info_from_dict = ModuleErrorInfo.from_dict(module_error_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


