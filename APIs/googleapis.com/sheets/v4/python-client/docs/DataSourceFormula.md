# DataSourceFormula

A data source formula.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_execution_status** | [**DataExecutionStatus**](DataExecutionStatus.md) |  | [optional] 
**data_source_id** | **str** | The ID of the data source the formula is associated with. | [optional] 

## Example

```python
from openapi_client.models.data_source_formula import DataSourceFormula

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceFormula from a JSON string
data_source_formula_instance = DataSourceFormula.from_json(json)
# print the JSON string representation of the object
print(DataSourceFormula.to_json())

# convert the object into a dict
data_source_formula_dict = data_source_formula_instance.to_dict()
# create an instance of DataSourceFormula from a dict
data_source_formula_from_dict = DataSourceFormula.from_dict(data_source_formula_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


