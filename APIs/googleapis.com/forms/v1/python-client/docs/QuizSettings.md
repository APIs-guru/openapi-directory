# QuizSettings

Settings related to quiz forms and grading. These must be updated with the UpdateSettingsRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_quiz** | **bool** | Whether this form is a quiz or not. When true, responses are graded based on question Grading. Upon setting to false, all question Grading is deleted. | [optional] 

## Example

```python
from openapi_client.models.quiz_settings import QuizSettings

# TODO update the JSON string below
json = "{}"
# create an instance of QuizSettings from a JSON string
quiz_settings_instance = QuizSettings.from_json(json)
# print the JSON string representation of the object
print(QuizSettings.to_json())

# convert the object into a dict
quiz_settings_dict = quiz_settings_instance.to_dict()
# create an instance of QuizSettings from a dict
quiz_settings_from_dict = QuizSettings.from_dict(quiz_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


