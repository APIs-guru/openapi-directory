# ColumnDescriptor

Describes a column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_policy_tags** | **List[str]** | A list of BigQuery policy tags that will be applied to the column. | [optional] 
**description** | **str** | A textual description of the column. | [optional] 
**path** | **List[str]** | The identifier for the column. Each entry in &#x60;path&#x60; represents one level of nesting. | [optional] 

## Example

```python
from openapi_client.models.column_descriptor import ColumnDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of ColumnDescriptor from a JSON string
column_descriptor_instance = ColumnDescriptor.from_json(json)
# print the JSON string representation of the object
print(ColumnDescriptor.to_json())

# convert the object into a dict
column_descriptor_dict = column_descriptor_instance.to_dict()
# create an instance of ColumnDescriptor from a dict
column_descriptor_from_dict = ColumnDescriptor.from_dict(column_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


