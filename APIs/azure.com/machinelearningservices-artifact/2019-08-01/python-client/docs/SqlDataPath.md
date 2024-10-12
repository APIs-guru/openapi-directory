# SqlDataPath


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sql_query** | **str** |  | [optional] 
**sql_stored_procedure_name** | **str** |  | [optional] 
**sql_stored_procedure_params** | [**List[StoredProcedureParameter]**](StoredProcedureParameter.md) |  | [optional] 
**sql_table_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.sql_data_path import SqlDataPath

# TODO update the JSON string below
json = "{}"
# create an instance of SqlDataPath from a JSON string
sql_data_path_instance = SqlDataPath.from_json(json)
# print the JSON string representation of the object
print(SqlDataPath.to_json())

# convert the object into a dict
sql_data_path_dict = sql_data_path_instance.to_dict()
# create an instance of SqlDataPath from a dict
sql_data_path_from_dict = SqlDataPath.from_dict(sql_data_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


