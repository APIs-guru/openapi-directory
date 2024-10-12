# ListRuntimeActionSchemasResponse

Response message for ConnectorsService.ListRuntimeActionSchemas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Next page token. | [optional] 
**runtime_action_schemas** | [**List[RuntimeActionSchema]**](RuntimeActionSchema.md) | Runtime action schemas. | [optional] 

## Example

```python
from openapi_client.models.list_runtime_action_schemas_response import ListRuntimeActionSchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRuntimeActionSchemasResponse from a JSON string
list_runtime_action_schemas_response_instance = ListRuntimeActionSchemasResponse.from_json(json)
# print the JSON string representation of the object
print(ListRuntimeActionSchemasResponse.to_json())

# convert the object into a dict
list_runtime_action_schemas_response_dict = list_runtime_action_schemas_response_instance.to_dict()
# create an instance of ListRuntimeActionSchemasResponse from a dict
list_runtime_action_schemas_response_from_dict = ListRuntimeActionSchemasResponse.from_dict(list_runtime_action_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


