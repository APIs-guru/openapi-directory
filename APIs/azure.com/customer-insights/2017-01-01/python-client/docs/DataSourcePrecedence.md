# DataSourcePrecedence

The data source precedence is a way to know the precedence of each data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source** | [**DataSource**](DataSource.md) |  | [optional] 
**precedence** | **int** | the precedence value. | [optional] 

## Example

```python
from openapi_client.models.data_source_precedence import DataSourcePrecedence

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourcePrecedence from a JSON string
data_source_precedence_instance = DataSourcePrecedence.from_json(json)
# print the JSON string representation of the object
print(DataSourcePrecedence.to_json())

# convert the object into a dict
data_source_precedence_dict = data_source_precedence_instance.to_dict()
# create an instance of DataSourcePrecedence from a dict
data_source_precedence_from_dict = DataSourcePrecedence.from_dict(data_source_precedence_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


