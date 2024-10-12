# DataSourceSpec

This specifies the details of the data source. For example, for BigQuery, this specifies information about the BigQuery source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**big_query** | [**BigQueryDataSourceSpec**](BigQueryDataSourceSpec.md) |  | [optional] 
**parameters** | [**List[DataSourceParameter]**](DataSourceParameter.md) | The parameters of the data source, used when querying the data source. | [optional] 

## Example

```python
from openapi_client.models.data_source_spec import DataSourceSpec

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceSpec from a JSON string
data_source_spec_instance = DataSourceSpec.from_json(json)
# print the JSON string representation of the object
print(DataSourceSpec.to_json())

# convert the object into a dict
data_source_spec_dict = data_source_spec_instance.to_dict()
# create an instance of DataSourceSpec from a dict
data_source_spec_from_dict = DataSourceSpec.from_dict(data_source_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


