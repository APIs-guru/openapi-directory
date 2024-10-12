# UpdateKbOperationDTO

Contains list of QnAs to be updated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add** | [**CreateKbInputDTO**](CreateKbInputDTO.md) | An instance of CreateKbInputDTO for add operation | [optional] 
**default_answer_used_for_extraction** | **str** | Text string to be used as the answer in any Q-A which has no extracted answer from the document but has a hierarchy. Required when EnableHierarchicalExtraction field is set to True. | [optional] 
**delete** | [**DeleteKbContentsDTO**](DeleteKbContentsDTO.md) | An instance of DeleteKbContentsDTO for delete Operation | [optional] 
**enable_hierarchical_extraction** | **bool** | Enable hierarchical extraction of Q-A from files and urls. The value set during KB creation will be used if this field is not present. | [optional] 
**update** | [**UpdateKbContentsDTO**](UpdateKbContentsDTO.md) | An instance of UpdateKbContentsDTO for Update Operation | [optional] 

## Example

```python
from openapi_client.models.update_kb_operation_dto import UpdateKbOperationDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateKbOperationDTO from a JSON string
update_kb_operation_dto_instance = UpdateKbOperationDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateKbOperationDTO.to_json())

# convert the object into a dict
update_kb_operation_dto_dict = update_kb_operation_dto_instance.to_dict()
# create an instance of UpdateKbOperationDTO from a dict
update_kb_operation_dto_from_dict = UpdateKbOperationDTO.from_dict(update_kb_operation_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


