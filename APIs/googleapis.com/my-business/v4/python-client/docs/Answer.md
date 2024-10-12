# Answer

Represents an answer to a question

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**Author**](Author.md) |  | [optional] 
**create_time** | **str** | Output only. The timestamp for when the answer was written. | [optional] 
**name** | **str** | Output only. The unique name for the answer accounts/*/locations/*/questions/*/answers/* | [optional] 
**text** | **str** | The text of the answer. It should contain at least one non-whitespace character. The maximum length is 4096 characters. | [optional] 
**update_time** | **str** | Output only. The timestamp for when the answer was last modified. | [optional] 
**upvote_count** | **int** | Output only. The number of upvotes for the answer. | [optional] 

## Example

```python
from openapi_client.models.answer import Answer

# TODO update the JSON string below
json = "{}"
# create an instance of Answer from a JSON string
answer_instance = Answer.from_json(json)
# print the JSON string representation of the object
print(Answer.to_json())

# convert the object into a dict
answer_dict = answer_instance.to_dict()
# create an instance of Answer from a dict
answer_from_dict = Answer.from_dict(answer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


