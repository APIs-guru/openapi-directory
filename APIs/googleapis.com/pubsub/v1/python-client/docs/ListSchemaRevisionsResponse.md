# ListSchemaRevisionsResponse

Response for the `ListSchemaRevisions` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**schemas** | [**List[ModelSchema]**](ModelSchema.md) | The revisions of the schema. | [optional] 

## Example

```python
from openapi_client.models.list_schema_revisions_response import ListSchemaRevisionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSchemaRevisionsResponse from a JSON string
list_schema_revisions_response_instance = ListSchemaRevisionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSchemaRevisionsResponse.to_json())

# convert the object into a dict
list_schema_revisions_response_dict = list_schema_revisions_response_instance.to_dict()
# create an instance of ListSchemaRevisionsResponse from a dict
list_schema_revisions_response_from_dict = ListSchemaRevisionsResponse.from_dict(list_schema_revisions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


