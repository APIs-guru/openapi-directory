# DcimModuleTypesList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[ModuleType]**](ModuleType.md) |  | 

## Example

```python
from openapi_client.models.dcim_module_types_list200_response import DcimModuleTypesList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DcimModuleTypesList200Response from a JSON string
dcim_module_types_list200_response_instance = DcimModuleTypesList200Response.from_json(json)
# print the JSON string representation of the object
print(DcimModuleTypesList200Response.to_json())

# convert the object into a dict
dcim_module_types_list200_response_dict = dcim_module_types_list200_response_instance.to_dict()
# create an instance of DcimModuleTypesList200Response from a dict
dcim_module_types_list200_response_from_dict = DcimModuleTypesList200Response.from_dict(dcim_module_types_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


