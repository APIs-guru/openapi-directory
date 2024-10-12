# BigQueryTableSpec

Specifies a BigQuery table definition. Only [native tables](https://cloud.google.com/bigquery/docs/tables-intro) are allowed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dataset_id** | **str** | The BigQuery dataset id. | [optional] 
**table_id** | **str** | The BigQuery table id. | [optional] 
**table_project_id** | **str** | The ID of a BigQuery project the table belongs to. If not specified, the project_id is assumed. | [optional] 

## Example

```python
from openapi_client.models.big_query_table_spec import BigQueryTableSpec

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryTableSpec from a JSON string
big_query_table_spec_instance = BigQueryTableSpec.from_json(json)
# print the JSON string representation of the object
print(BigQueryTableSpec.to_json())

# convert the object into a dict
big_query_table_spec_dict = big_query_table_spec_instance.to_dict()
# create an instance of BigQueryTableSpec from a dict
big_query_table_spec_from_dict = BigQueryTableSpec.from_dict(big_query_table_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


