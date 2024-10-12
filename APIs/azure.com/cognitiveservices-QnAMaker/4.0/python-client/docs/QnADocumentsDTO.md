# QnADocumentsDTO

List of QnADTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qna_documents** | [**List[QnADTO]**](QnADTO.md) | List of answers. | [optional] 

## Example

```python
from openapi_client.models.qn_a_documents_dto import QnADocumentsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of QnADocumentsDTO from a JSON string
qn_a_documents_dto_instance = QnADocumentsDTO.from_json(json)
# print the JSON string representation of the object
print(QnADocumentsDTO.to_json())

# convert the object into a dict
qn_a_documents_dto_dict = qn_a_documents_dto_instance.to_dict()
# create an instance of QnADocumentsDTO from a dict
qn_a_documents_dto_from_dict = QnADocumentsDTO.from_dict(qn_a_documents_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


