# WordListBaseUpdateObject

Object model for updating one of the closed list's sublists.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_form** | **str** | The standard form that the list represents. | [optional] 
**list** | **List[str]** | List of synonym words. | [optional] 

## Example

```python
from openapi_client.models.word_list_base_update_object import WordListBaseUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of WordListBaseUpdateObject from a JSON string
word_list_base_update_object_instance = WordListBaseUpdateObject.from_json(json)
# print the JSON string representation of the object
print(WordListBaseUpdateObject.to_json())

# convert the object into a dict
word_list_base_update_object_dict = word_list_base_update_object_instance.to_dict()
# create an instance of WordListBaseUpdateObject from a dict
word_list_base_update_object_from_dict = WordListBaseUpdateObject.from_dict(word_list_base_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


