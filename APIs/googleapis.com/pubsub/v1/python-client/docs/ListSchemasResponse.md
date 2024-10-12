# ListSchemasResponse

Response for the `ListSchemas` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If not empty, indicates that there may be more schemas that match the request; this value should be passed in a new &#x60;ListSchemasRequest&#x60;. | [optional] 
**schemas** | [**List[ModelSchema]**](ModelSchema.md) | The resulting schemas. | [optional] 

## Example

```python
from openapi_client.models.list_schemas_response import ListSchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSchemasResponse from a JSON string
list_schemas_response_instance = ListSchemasResponse.from_json(json)
# print the JSON string representation of the object
print(ListSchemasResponse.to_json())

# convert the object into a dict
list_schemas_response_dict = list_schemas_response_instance.to_dict()
# create an instance of ListSchemasResponse from a dict
list_schemas_response_from_dict = ListSchemasResponse.from_dict(list_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


