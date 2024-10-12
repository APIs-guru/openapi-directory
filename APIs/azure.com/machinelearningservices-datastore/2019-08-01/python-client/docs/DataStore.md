# DataStore


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_data_lake_section** | [**AzureDataLake**](AzureDataLake.md) |  | [optional] 
**azure_postgre_sql_section** | [**AzurePostgreSql**](AzurePostgreSql.md) |  | [optional] 
**azure_sql_database_section** | [**AzureSqlDatabase**](AzureSqlDatabase.md) |  | [optional] 
**azure_storage_section** | [**AzureStorage**](AzureStorage.md) |  | [optional] 
**data_store_type** | **str** | The Azure storage service this datastore points to. | [optional] 
**gluster_fs_section** | [**GlusterFs**](GlusterFs.md) |  | [optional] 
**has_been_validated** | **bool** | A read only property that denotes whether the service datastore has been validated with credentials. | [optional] 
**name** | **str** | Name of the datastore | [optional] 
**tags** | **Dict[str, str]** | Tags to datastore | [optional] 

## Example

```python
from openapi_client.models.data_store import DataStore

# TODO update the JSON string below
json = "{}"
# create an instance of DataStore from a JSON string
data_store_instance = DataStore.from_json(json)
# print the JSON string representation of the object
print(DataStore.to_json())

# convert the object into a dict
data_store_dict = data_store_instance.to_dict()
# create an instance of DataStore from a dict
data_store_from_dict = DataStore.from_dict(data_store_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


