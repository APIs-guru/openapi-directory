# AzureTableOutputDataSource

Describes an Azure Table output data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AzureTableOutputDataSourceProperties**](AzureTableOutputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_table_output_data_source import AzureTableOutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of AzureTableOutputDataSource from a JSON string
azure_table_output_data_source_instance = AzureTableOutputDataSource.from_json(json)
# print the JSON string representation of the object
print(AzureTableOutputDataSource.to_json())

# convert the object into a dict
azure_table_output_data_source_dict = azure_table_output_data_source_instance.to_dict()
# create an instance of AzureTableOutputDataSource from a dict
azure_table_output_data_source_from_dict = AzureTableOutputDataSource.from_dict(azure_table_output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


