# CreateKbDTO

Post body schema for CreateKb operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_answer_used_for_extraction** | **str** | Text string to be used as the answer in any Q-A which has no extracted answer from the document but has a hierarchy. Required when EnableHierarchicalExtraction field is set to True. | [optional] 
**enable_hierarchical_extraction** | **bool** | Enable hierarchical extraction of Q-A from files and urls. Value to be considered False if this field is not present. | [optional] 
**files** | [**List[FileDTO]**](FileDTO.md) | List of files from which to Extract Q-A. | [optional] 
**language** | **str** | Language of the knowledgebase. | [optional] 
**name** | **str** | Friendly name for the knowledgebase. | 
**qna_list** | [**List[QnADTO]**](QnADTO.md) | List of Q-A (QnADTO) to be added to the knowledgebase. Q-A Ids are assigned by the service and should be omitted. | [optional] 
**urls** | **List[str]** | List of URLs to be used for extracting Q-A. | [optional] 

## Example

```python
from openapi_client.models.create_kb_dto import CreateKbDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateKbDTO from a JSON string
create_kb_dto_instance = CreateKbDTO.from_json(json)
# print the JSON string representation of the object
print(CreateKbDTO.to_json())

# convert the object into a dict
create_kb_dto_dict = create_kb_dto_instance.to_dict()
# create an instance of CreateKbDTO from a dict
create_kb_dto_from_dict = CreateKbDTO.from_dict(create_kb_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


