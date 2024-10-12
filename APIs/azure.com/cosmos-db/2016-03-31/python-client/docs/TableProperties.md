# TableProperties

The properties of an Azure Cosmos Table

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Name of the Cosmos DB table | 

## Example

```python
from openapi_client.models.table_properties import TableProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableProperties from a JSON string
table_properties_instance = TableProperties.from_json(json)
# print the JSON string representation of the object
print(TableProperties.to_json())

# convert the object into a dict
table_properties_dict = table_properties_instance.to_dict()
# create an instance of TableProperties from a dict
table_properties_from_dict = TableProperties.from_dict(table_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


