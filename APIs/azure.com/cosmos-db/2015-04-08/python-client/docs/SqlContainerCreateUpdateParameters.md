# SqlContainerCreateUpdateParameters

Parameters to create and update Cosmos DB container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SqlContainerCreateUpdateProperties**](SqlContainerCreateUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.sql_container_create_update_parameters import SqlContainerCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SqlContainerCreateUpdateParameters from a JSON string
sql_container_create_update_parameters_instance = SqlContainerCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SqlContainerCreateUpdateParameters.to_json())

# convert the object into a dict
sql_container_create_update_parameters_dict = sql_container_create_update_parameters_instance.to_dict()
# create an instance of SqlContainerCreateUpdateParameters from a dict
sql_container_create_update_parameters_from_dict = SqlContainerCreateUpdateParameters.from_dict(sql_container_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


