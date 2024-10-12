# ColumnSpec

A representation of a column in a relational table. When listing them, column specs are returned in the same order in which they were given on import . Used by: * Tables

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_stats** | [**DataStats**](DataStats.md) |  | [optional] 
**data_type** | [**DataType**](DataType.md) |  | [optional] 
**display_name** | **str** | Output only. The name of the column to show in the interface. The name can be up to 100 characters long and can consist only of ASCII Latin letters A-Z and a-z, ASCII digits 0-9, underscores(_), and forward slashes(/), and must start with a letter or a digit. | [optional] 
**etag** | **str** | Used to perform consistent read-modify-write updates. If not set, a blind \&quot;overwrite\&quot; update happens. | [optional] 
**name** | **str** | Output only. The resource name of the column specs. Form: &#x60;projects/{project_id}/locations/{location_id}/datasets/{dataset_id}/tableSpecs/{table_spec_id}/columnSpecs/{column_spec_id}&#x60; | [optional] 
**top_correlated_columns** | [**List[CorrelatedColumn]**](CorrelatedColumn.md) | Deprecated. | [optional] 

## Example

```python
from openapi_client.models.column_spec import ColumnSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnSpec from a JSON string
column_spec_instance = ColumnSpec.from_json(json)
# print the JSON string representation of the object
print(ColumnSpec.to_json())

# convert the object into a dict
column_spec_dict = column_spec_instance.to_dict()
# create an instance of ColumnSpec from a dict
column_spec_from_dict = ColumnSpec.from_dict(column_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


