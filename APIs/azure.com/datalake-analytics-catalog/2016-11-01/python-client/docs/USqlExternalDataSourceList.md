# USqlExternalDataSourceList

A Data Lake Analytics catalog U-SQL external datasource item list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[USqlExternalDataSource]**](USqlExternalDataSource.md) | the list of external data sources in the database | [optional] [readonly] 
**next_link** | **str** | the link to the next page of results. | [optional] 

## Example

```python
from openapi_client.models.u_sql_external_data_source_list import USqlExternalDataSourceList

# TODO update the JSON string below
json = "{}"
# create an instance of USqlExternalDataSourceList from a JSON string
u_sql_external_data_source_list_instance = USqlExternalDataSourceList.from_json(json)
# print the JSON string representation of the object
print(USqlExternalDataSourceList.to_json())

# convert the object into a dict
u_sql_external_data_source_list_dict = u_sql_external_data_source_list_instance.to_dict()
# create an instance of USqlExternalDataSourceList from a dict
u_sql_external_data_source_list_from_dict = USqlExternalDataSourceList.from_dict(u_sql_external_data_source_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


