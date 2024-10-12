# TableCreateUpdateProperties

Properties to create and update Azure Cosmos DB Table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**options** | **Dict[str, str]** | CreateUpdateOptions are a list of key-value pairs that describe the resource. Supported keys are \&quot;If-Match\&quot;, \&quot;If-None-Match\&quot;, \&quot;Session-Token\&quot; and \&quot;Throughput\&quot; | 
**resource** | [**TableResource**](TableResource.md) |  | 

## Example

```python
from openapi_client.models.table_create_update_properties import TableCreateUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableCreateUpdateProperties from a JSON string
table_create_update_properties_instance = TableCreateUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(TableCreateUpdateProperties.to_json())

# convert the object into a dict
table_create_update_properties_dict = table_create_update_properties_instance.to_dict()
# create an instance of TableCreateUpdateProperties from a dict
table_create_update_properties_from_dict = TableCreateUpdateProperties.from_dict(table_create_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


