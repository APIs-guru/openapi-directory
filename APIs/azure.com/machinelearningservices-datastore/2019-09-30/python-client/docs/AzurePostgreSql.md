# AzurePostgreSql


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | The Azure PostgreSQL database name | [optional] 
**endpoint** | **str** | The Azure PostgreSQL server host endpoint | [optional] 
**port_number** | **str** | The Azure PostgreSQL port number | [optional] 
**resource_group** | **str** | Resource Group Name | [optional] 
**server_name** | **str** | The Azure PostgreSQL server name | [optional] 
**subscription_id** | **str** | Subscription Id | [optional] 
**user_id** | **str** | The Azure PostgreSQL user id | [optional] 
**user_password** | **str** | The Azure PostgreSQL user password | [optional] 

## Example

```python
from openapi_client.models.azure_postgre_sql import AzurePostgreSql

# TODO update the JSON string below
json = "{}"
# create an instance of AzurePostgreSql from a JSON string
azure_postgre_sql_instance = AzurePostgreSql.from_json(json)
# print the JSON string representation of the object
print(AzurePostgreSql.to_json())

# convert the object into a dict
azure_postgre_sql_dict = azure_postgre_sql_instance.to_dict()
# create an instance of AzurePostgreSql from a dict
azure_postgre_sql_from_dict = AzurePostgreSql.from_dict(azure_postgre_sql_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


