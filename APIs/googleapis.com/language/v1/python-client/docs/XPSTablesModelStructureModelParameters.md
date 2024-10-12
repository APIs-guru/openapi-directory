# XPSTablesModelStructureModelParameters

Model hyper-parameters for a model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hyperparameters** | [**List[XPSTablesModelStructureModelParametersParameter]**](XPSTablesModelStructureModelParametersParameter.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_tables_model_structure_model_parameters import XPSTablesModelStructureModelParameters

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesModelStructureModelParameters from a JSON string
xps_tables_model_structure_model_parameters_instance = XPSTablesModelStructureModelParameters.from_json(json)
# print the JSON string representation of the object
print(XPSTablesModelStructureModelParameters.to_json())

# convert the object into a dict
xps_tables_model_structure_model_parameters_dict = xps_tables_model_structure_model_parameters_instance.to_dict()
# create an instance of XPSTablesModelStructureModelParameters from a dict
xps_tables_model_structure_model_parameters_from_dict = XPSTablesModelStructureModelParameters.from_dict(xps_tables_model_structure_model_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


