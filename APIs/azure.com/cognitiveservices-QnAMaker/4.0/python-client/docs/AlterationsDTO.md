# AlterationsDTO

Collection of words that are synonyms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alterations** | **List[str]** | Words that are synonymous with each other. | 

## Example

```python
from openapi_client.models.alterations_dto import AlterationsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of AlterationsDTO from a JSON string
alterations_dto_instance = AlterationsDTO.from_json(json)
# print the JSON string representation of the object
print(AlterationsDTO.to_json())

# convert the object into a dict
alterations_dto_dict = alterations_dto_instance.to_dict()
# create an instance of AlterationsDTO from a dict
alterations_dto_from_dict = AlterationsDTO.from_dict(alterations_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


