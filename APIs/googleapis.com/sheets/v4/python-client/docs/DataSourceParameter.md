# DataSourceParameter

A parameter in a data source's query. The parameter allows the user to pass in values from the spreadsheet into a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Named parameter. Must be a legitimate identifier for the DataSource that supports it. For example, [BigQuery identifier](https://cloud.google.com/bigquery/docs/reference/standard-sql/lexical#identifiers). | [optional] 
**named_range_id** | **str** | ID of a NamedRange. Its size must be 1x1. | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.data_source_parameter import DataSourceParameter

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceParameter from a JSON string
data_source_parameter_instance = DataSourceParameter.from_json(json)
# print the JSON string representation of the object
print(DataSourceParameter.to_json())

# convert the object into a dict
data_source_parameter_dict = data_source_parameter_instance.to_dict()
# create an instance of DataSourceParameter from a dict
data_source_parameter_from_dict = DataSourceParameter.from_dict(data_source_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


