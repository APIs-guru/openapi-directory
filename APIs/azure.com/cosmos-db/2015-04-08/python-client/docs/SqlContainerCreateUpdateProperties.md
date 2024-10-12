# SqlContainerCreateUpdateProperties

Properties to create and update Azure Cosmos DB container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **Dict[str, str]** | CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are \&quot;If-Match\&quot;, \&quot;If-None-Match\&quot;, \&quot;Session-Token\&quot; and \&quot;Throughput\&quot; | 
**resource** | [**SqlContainerResource**](SqlContainerResource.md) |  | 

## Example

```python
from openapi_client.models.sql_container_create_update_properties import SqlContainerCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SqlContainerCreateUpdateProperties from a JSON string
sql_container_create_update_properties_instance = SqlContainerCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(SqlContainerCreateUpdateProperties.to_json())

# convert the object into a dict
sql_container_create_update_properties_dict = sql_container_create_update_properties_instance.to_dict()
# create an instance of SqlContainerCreateUpdateProperties from a dict
sql_container_create_update_properties_from_dict = SqlContainerCreateUpdateProperties.from_dict(sql_container_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


