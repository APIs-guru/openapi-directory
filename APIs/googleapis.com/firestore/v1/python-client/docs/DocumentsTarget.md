# DocumentsTarget

A target specified by a set of documents names.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | **List[str]** | The names of the documents to retrieve. In the format: &#x60;projects/{project_id}/databases/{database_id}/documents/{document_path}&#x60;. The request will fail if any of the document is not a child resource of the given &#x60;database&#x60;. Duplicate names will be elided. | [optional] 

## Example

```python
from openapi_client.models.documents_target import DocumentsTarget

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentsTarget from a JSON string
documents_target_instance = DocumentsTarget.from_json(json)
# print the JSON string representation of the object
print(DocumentsTarget.to_json())

# convert the object into a dict
documents_target_dict = documents_target_instance.to_dict()
# create an instance of DocumentsTarget from a dict
documents_target_from_dict = DocumentsTarget.from_dict(documents_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


