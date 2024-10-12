# AzureDataLakeStoreOutputDataSourceProperties

The properties that are associated with an Azure Data Lake Store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_name** | **str** | The name of the Azure Data Lake Store account. Required on PUT (CreateOrReplace) requests. | [optional] 
**date_format** | **str** | The date format. Wherever {date} appears in filePathPrefix, the value of this property is used as the date format instead. | [optional] 
**file_path_prefix** | **str** | The location of the file to which the output should be written to. Required on PUT (CreateOrReplace) requests. | [optional] 
**tenant_id** | **str** | The tenant id of the user used to obtain the refresh token. Required on PUT (CreateOrReplace) requests. | [optional] 
**time_format** | **str** | The time format. Wherever {time} appears in filePathPrefix, the value of this property is used as the time format instead. | [optional] 
**refresh_token** | **str** | A refresh token that can be used to obtain a valid access token that can then be used to authenticate with the data source. A valid refresh token is currently only obtainable via the Azure Portal. It is recommended to put a dummy string value here when creating the data source and then going to the Azure Portal to authenticate the data source which will update this property with a valid refresh token. Required on PUT (CreateOrReplace) requests. | [optional] 
**token_user_display_name** | **str** | The user display name of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | [optional] 
**token_user_principal_name** | **str** | The user principal name (UPN) of the user that was used to obtain the refresh token. Use this property to help remember which user was used to obtain the refresh token. | [optional] 

## Example

```python
from openapi_client.models.azure_data_lake_store_output_data_source_properties import AzureDataLakeStoreOutputDataSourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureDataLakeStoreOutputDataSourceProperties from a JSON string
azure_data_lake_store_output_data_source_properties_instance = AzureDataLakeStoreOutputDataSourceProperties.from_json(json)
# print the JSON string representation of the object
print(AzureDataLakeStoreOutputDataSourceProperties.to_json())

# convert the object into a dict
azure_data_lake_store_output_data_source_properties_dict = azure_data_lake_store_output_data_source_properties_instance.to_dict()
# create an instance of AzureDataLakeStoreOutputDataSourceProperties from a dict
azure_data_lake_store_output_data_source_properties_from_dict = AzureDataLakeStoreOutputDataSourceProperties.from_dict(azure_data_lake_store_output_data_source_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


