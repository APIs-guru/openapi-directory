# TableCreateUpdateParameters

Parameters to create and update Cosmos DB Table.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TableCreateUpdateProperties**](TableCreateUpdateProperties.md) |  | 

## Example

```python
from openapi_client.models.table_create_update_parameters import TableCreateUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TableCreateUpdateParameters from a JSON string
table_create_update_parameters_instance = TableCreateUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(TableCreateUpdateParameters.to_json())

# convert the object into a dict
table_create_update_parameters_dict = table_create_update_parameters_instance.to_dict()
# create an instance of TableCreateUpdateParameters from a dict
table_create_update_parameters_from_dict = TableCreateUpdateParameters.from_dict(table_create_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


