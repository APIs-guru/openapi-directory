# BlobOutputDataSourcePropertiesAllOfStorageAccounts

The properties that are associated with an Azure Storage account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_key** | **str** | The account key for the Azure Storage account. Required on PUT (CreateOrReplace) requests. | [optional] 
**account_name** | **str** | The name of the Azure Storage account. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.blob_output_data_source_properties_all_of_storage_accounts import BlobOutputDataSourcePropertiesAllOfStorageAccounts

# TODO update the JSON string below
json = "{}"
# create an instance of BlobOutputDataSourcePropertiesAllOfStorageAccounts from a JSON string
blob_output_data_source_properties_all_of_storage_accounts_instance = BlobOutputDataSourcePropertiesAllOfStorageAccounts.from_json(json)
# print the JSON string representation of the object
print(BlobOutputDataSourcePropertiesAllOfStorageAccounts.to_json())

# convert the object into a dict
blob_output_data_source_properties_all_of_storage_accounts_dict = blob_output_data_source_properties_all_of_storage_accounts_instance.to_dict()
# create an instance of BlobOutputDataSourcePropertiesAllOfStorageAccounts from a dict
blob_output_data_source_properties_all_of_storage_accounts_from_dict = BlobOutputDataSourcePropertiesAllOfStorageAccounts.from_dict(blob_output_data_source_properties_all_of_storage_accounts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


