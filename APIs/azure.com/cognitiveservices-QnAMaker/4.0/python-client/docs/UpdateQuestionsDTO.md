# UpdateQuestionsDTO

PATCH Body schema for Update Kb which contains list of questions to be added and deleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add** | **List[str]** | List of questions to be added | [optional] 
**delete** | **List[str]** | List of questions to be deleted. | [optional] 

## Example

```python
from openapi_client.models.update_questions_dto import UpdateQuestionsDTO

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateQuestionsDTO from a JSON string
update_questions_dto_instance = UpdateQuestionsDTO.from_json(json)
# print the JSON string representation of the object
print(UpdateQuestionsDTO.to_json())

# convert the object into a dict
update_questions_dto_dict = update_questions_dto_instance.to_dict()
# create an instance of UpdateQuestionsDTO from a dict
update_questions_dto_from_dict = UpdateQuestionsDTO.from_dict(update_questions_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


