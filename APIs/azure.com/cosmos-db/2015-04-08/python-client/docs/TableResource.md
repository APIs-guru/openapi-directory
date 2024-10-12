# TableResource

Cosmos DB table id object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB table | 

## Example

```python
from openapi_client.models.table_resource import TableResource

# TODO update the JSON string below
json = "{}"
# create an instance of TableResource from a JSON string
table_resource_instance = TableResource.from_json(json)
# print the JSON string representation of the object
print(TableResource.to_json())

# convert the object into a dict
table_resource_dict = table_resource_instance.to_dict()
# create an instance of TableResource from a dict
table_resource_from_dict = TableResource.from_dict(table_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


