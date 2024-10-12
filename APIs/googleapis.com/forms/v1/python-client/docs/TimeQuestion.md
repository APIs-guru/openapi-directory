# TimeQuestion

A time question.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **bool** | &#x60;true&#x60; if the question is about an elapsed time. Otherwise it is about a time of day. | [optional] 

## Example

```python
from openapi_client.models.time_question import TimeQuestion

# TODO update the JSON string below
json = "{}"
# create an instance of TimeQuestion from a JSON string
time_question_instance = TimeQuestion.from_json(json)
# print the JSON string representation of the object
print(TimeQuestion.to_json())

# convert the object into a dict
time_question_dict = time_question_instance.to_dict()
# create an instance of TimeQuestion from a dict
time_question_from_dict = TimeQuestion.from_dict(time_question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


