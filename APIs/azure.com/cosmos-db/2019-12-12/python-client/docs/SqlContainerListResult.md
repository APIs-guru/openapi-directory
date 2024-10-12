# SqlContainerListResult

The List operation response, that contains the containers and their properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[SqlContainerGetResults]**](SqlContainerGetResults.md) | List of containers and their properties. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sql_container_list_result import SqlContainerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SqlContainerListResult from a JSON string
sql_container_list_result_instance = SqlContainerListResult.from_json(json)
# print the JSON string representation of the object
print(SqlContainerListResult.to_json())

# convert the object into a dict
sql_container_list_result_dict = sql_container_list_result_instance.to_dict()
# create an instance of SqlContainerListResult from a dict
sql_container_list_result_from_dict = SqlContainerListResult.from_dict(sql_container_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


