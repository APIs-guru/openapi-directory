# ReplaceKbDTO

Post body schema for Replace KB operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qn_a_list** | [**List[QnADTO]**](QnADTO.md) | List of Q-A (QnADTO) to be added to the knowledgebase. Q-A Ids are assigned by the service and should be omitted. | 

## Example

```python
from openapi_client.models.replace_kb_dto import ReplaceKbDTO

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceKbDTO from a JSON string
replace_kb_dto_instance = ReplaceKbDTO.from_json(json)
# print the JSON string representation of the object
print(ReplaceKbDTO.to_json())

# convert the object into a dict
replace_kb_dto_dict = replace_kb_dto_instance.to_dict()
# create an instance of ReplaceKbDTO from a dict
replace_kb_dto_from_dict = ReplaceKbDTO.from_dict(replace_kb_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


