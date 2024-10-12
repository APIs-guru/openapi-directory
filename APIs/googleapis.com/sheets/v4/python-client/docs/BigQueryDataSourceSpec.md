# BigQueryDataSourceSpec

The specification of a BigQuery data source that's connected to a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **str** | The ID of a BigQuery enabled Google Cloud project with a billing account attached. For any queries executed against the data source, the project is charged. | [optional] 
**query_spec** | [**BigQueryQuerySpec**](BigQueryQuerySpec.md) |  | [optional] 
**table_spec** | [**BigQueryTableSpec**](BigQueryTableSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.big_query_data_source_spec import BigQueryDataSourceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryDataSourceSpec from a JSON string
big_query_data_source_spec_instance = BigQueryDataSourceSpec.from_json(json)
# print the JSON string representation of the object
print(BigQueryDataSourceSpec.to_json())

# convert the object into a dict
big_query_data_source_spec_dict = big_query_data_source_spec_instance.to_dict()
# create an instance of BigQueryDataSourceSpec from a dict
big_query_data_source_spec_from_dict = BigQueryDataSourceSpec.from_dict(big_query_data_source_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


