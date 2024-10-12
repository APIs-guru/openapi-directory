# USqlExternalDataSource

A Data Lake Analytics catalog U-SQL external datasource item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | the name of the database. | [optional] 
**external_data_source_name** | **str** | the name of the external data source. | [optional] 
**provider** | **str** | the name of the provider for the external data source. | [optional] 
**provider_string** | **str** | the name of the provider string for the external data source. | [optional] 
**pushdown_types** | **List[str]** | the list of types to push down from the external data source. | [optional] 
**compute_account_name** | **str** | the name of the Data Lake Analytics account. | [optional] 
**version** | **str** | the version of the catalog item. | [optional] 

## Example

```python
from openapi_client.models.u_sql_external_data_source import USqlExternalDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of USqlExternalDataSource from a JSON string
u_sql_external_data_source_instance = USqlExternalDataSource.from_json(json)
# print the JSON string representation of the object
print(USqlExternalDataSource.to_json())

# convert the object into a dict
u_sql_external_data_source_dict = u_sql_external_data_source_instance.to_dict()
# create an instance of USqlExternalDataSource from a dict
u_sql_external_data_source_from_dict = USqlExternalDataSource.from_dict(u_sql_external_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


