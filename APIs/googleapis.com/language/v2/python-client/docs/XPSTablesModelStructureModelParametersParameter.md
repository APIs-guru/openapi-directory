# XPSTablesModelStructureModelParametersParameter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**float_value** | **float** | Float type parameter value. | [optional] 
**int_value** | **str** | Integer type parameter value. | [optional] 
**name** | **str** | Parameter name. | [optional] 
**string_value** | **str** | String type parameter value. | [optional] 

## Example

```python
from openapi_client.models.xps_tables_model_structure_model_parameters_parameter import XPSTablesModelStructureModelParametersParameter

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesModelStructureModelParametersParameter from a JSON string
xps_tables_model_structure_model_parameters_parameter_instance = XPSTablesModelStructureModelParametersParameter.from_json(json)
# print the JSON string representation of the object
print(XPSTablesModelStructureModelParametersParameter.to_json())

# convert the object into a dict
xps_tables_model_structure_model_parameters_parameter_dict = xps_tables_model_structure_model_parameters_parameter_instance.to_dict()
# create an instance of XPSTablesModelStructureModelParametersParameter from a dict
xps_tables_model_structure_model_parameters_parameter_from_dict = XPSTablesModelStructureModelParametersParameter.from_dict(xps_tables_model_structure_model_parameters_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


