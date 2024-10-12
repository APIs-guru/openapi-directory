# AzureTableOutputDataSourceProperties

The properties that are associated with an Azure Table output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_key** | **str** | The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. | [optional] 
**account_name** | **str** | The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. | [optional] 
**batch_size** | **int** | The number of rows to write to the Azure Table at a time. | [optional] 
**columns_to_remove** | **List[str]** | If specified, each item in the array is the name of a column to remove (if present) from output event entities. | [optional] 
**partition_key** | **str** | This element indicates the name of a column from the SELECT statement in the query that will be used as the partition key for the Azure Table. Required on PUT (CreateOrReplace) requests. | [optional] 
**row_key** | **str** | This element indicates the name of a column from the SELECT statement in the query that will be used as the row key for the Azure Table. Required on PUT (CreateOrReplace) requests. | [optional] 
**table** | **str** | The name of the Azure Table. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.azure_table_output_data_source_properties import AzureTableOutputDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureTableOutputDataSourceProperties from a JSON string
azure_table_output_data_source_properties_instance = AzureTableOutputDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(AzureTableOutputDataSourceProperties.to_json())

# convert the object into a dict
azure_table_output_data_source_properties_dict = azure_table_output_data_source_properties_instance.to_dict()
# create an instance of AzureTableOutputDataSourceProperties from a dict
azure_table_output_data_source_properties_from_dict = AzureTableOutputDataSourceProperties.from_dict(azure_table_output_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


