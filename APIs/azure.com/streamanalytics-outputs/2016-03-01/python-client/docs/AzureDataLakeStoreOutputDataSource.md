# AzureDataLakeStoreOutputDataSource

Describes an Azure Data Lake Store output data source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AzureDataLakeStoreOutputDataSourceProperties**](AzureDataLakeStoreOutputDataSourceProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.azure_data_lake_store_output_data_source import AzureDataLakeStoreOutputDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of AzureDataLakeStoreOutputDataSource from a JSON string
azure_data_lake_store_output_data_source_instance = AzureDataLakeStoreOutputDataSource.from_json(json)
# print the JSON string representation of the object
print(AzureDataLakeStoreOutputDataSource.to_json())

# convert the object into a dict
azure_data_lake_store_output_data_source_dict = azure_data_lake_store_output_data_source_instance.to_dict()
# create an instance of AzureDataLakeStoreOutputDataSource from a dict
azure_data_lake_store_output_data_source_from_dict = AzureDataLakeStoreOutputDataSource.from_dict(azure_data_lake_store_output_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


