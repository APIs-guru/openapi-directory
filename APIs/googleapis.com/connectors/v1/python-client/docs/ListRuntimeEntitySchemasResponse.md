# ListRuntimeEntitySchemasResponse

Response message for ConnectorsService.ListRuntimeEntitySchemas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Next page token. | [optional] 
**runtime_entity_schemas** | [**List[RuntimeEntitySchema]**](RuntimeEntitySchema.md) | Runtime entity schemas. | [optional] 

## Example

```python
from openapi_client.models.list_runtime_entity_schemas_response import ListRuntimeEntitySchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRuntimeEntitySchemasResponse from a JSON string
list_runtime_entity_schemas_response_instance = ListRuntimeEntitySchemasResponse.from_json(json)
# print the JSON string representation of the object
print(ListRuntimeEntitySchemasResponse.to_json())

# convert the object into a dict
list_runtime_entity_schemas_response_dict = list_runtime_entity_schemas_response_instance.to_dict()
# create an instance of ListRuntimeEntitySchemasResponse from a dict
list_runtime_entity_schemas_response_from_dict = ListRuntimeEntitySchemasResponse.from_dict(list_runtime_entity_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


