# TableGetProperties

The properties of an Azure Cosmos Table

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**TableGetPropertiesResource**](TableGetPropertiesResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_get_properties import TableGetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TableGetProperties from a JSON string
table_get_properties_instance = TableGetProperties.from_json(json)
# print the JSON string representation of the object
print(TableGetProperties.to_json())

# convert the object into a dict
table_get_properties_dict = table_get_properties_instance.to_dict()
# create an instance of TableGetProperties from a dict
table_get_properties_from_dict = TableGetProperties.from_dict(table_get_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


