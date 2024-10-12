# WordAlterationsDTO

Collection of word alterations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**word_alterations** | [**List[AlterationsDTO]**](AlterationsDTO.md) | Collection of word alterations. | 

## Example

```python
from openapi_client.models.word_alterations_dto import WordAlterationsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of WordAlterationsDTO from a JSON string
word_alterations_dto_instance = WordAlterationsDTO.from_json(json)
# print the JSON string representation of the object
print(WordAlterationsDTO.to_json())

# convert the object into a dict
word_alterations_dto_dict = word_alterations_dto_instance.to_dict()
# create an instance of WordAlterationsDTO from a dict
word_alterations_dto_from_dict = WordAlterationsDTO.from_dict(word_alterations_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


