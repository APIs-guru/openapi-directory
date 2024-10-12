# DocumentCreate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **object** |  | 
**labels** | **List[str]** | An array of label IDs to be added as labels to the document. | [optional] 
**meta** | [**DocumentMeta**](DocumentMeta.md) |  | 
**org** | **str** | The organization Name. Specify either &#x60;orgID&#x60; or &#x60;org&#x60;. | [optional] 
**org_id** | **str** | The organization Name. Specify either &#x60;orgID&#x60; or &#x60;org&#x60;. | [optional] 

## Example

```python
from openapi_client.models.document_create import DocumentCreate

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentCreate from a JSON string
document_create_instance = DocumentCreate.from_json(json)
# print the JSON string representation of the object
print(DocumentCreate.to_json())

# convert the object into a dict
document_create_dict = document_create_instance.to_dict()
# create an instance of DocumentCreate from a dict
document_create_from_dict = DocumentCreate.from_dict(document_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


