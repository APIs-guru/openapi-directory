# QueryTarget

A target specified by a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | The parent resource name. In the format: &#x60;projects/{project_id}/databases/{database_id}/documents&#x60; or &#x60;projects/{project_id}/databases/{database_id}/documents/{document_path}&#x60;. For example: &#x60;projects/my-project/databases/my-database/documents&#x60; or &#x60;projects/my-project/databases/my-database/documents/chatrooms/my-chatroom&#x60; | [optional] 
**structured_query** | [**StructuredQuery**](StructuredQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_target import QueryTarget

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTarget from a JSON string
query_target_instance = QueryTarget.from_json(json)
# print the JSON string representation of the object
print(QueryTarget.to_json())

# convert the object into a dict
query_target_dict = query_target_instance.to_dict()
# create an instance of QueryTarget from a dict
query_target_from_dict = QueryTarget.from_dict(query_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


