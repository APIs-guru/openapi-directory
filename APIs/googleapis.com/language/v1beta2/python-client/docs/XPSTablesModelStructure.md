# XPSTablesModelStructure

A description of Tables model structure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_parameters** | [**List[XPSTablesModelStructureModelParameters]**](XPSTablesModelStructureModelParameters.md) | A list of models. | [optional] 

## Example

```python
from openapi_client.models.xps_tables_model_structure import XPSTablesModelStructure

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTablesModelStructure from a JSON string
xps_tables_model_structure_instance = XPSTablesModelStructure.from_json(json)
# print the JSON string representation of the object
print(XPSTablesModelStructure.to_json())

# convert the object into a dict
xps_tables_model_structure_dict = xps_tables_model_structure_instance.to_dict()
# create an instance of XPSTablesModelStructure from a dict
xps_tables_model_structure_from_dict = XPSTablesModelStructure.from_dict(xps_tables_model_structure_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


