# DateQuestion

A date question. Date questions default to just month + day.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_time** | **bool** | Whether to include the time as part of the question. | [optional] 
**include_year** | **bool** | Whether to include the year as part of the question. | [optional] 

## Example

```python
from openapi_client.models.date_question import DateQuestion

# TODO update the JSON string below
json = "{}"
# create an instance of DateQuestion from a JSON string
date_question_instance = DateQuestion.from_json(json)
# print the JSON string representation of the object
print(DateQuestion.to_json())

# convert the object into a dict
date_question_dict = date_question_instance.to_dict()
# create an instance of DateQuestion from a dict
date_question_from_dict = DateQuestion.from_dict(date_question_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


