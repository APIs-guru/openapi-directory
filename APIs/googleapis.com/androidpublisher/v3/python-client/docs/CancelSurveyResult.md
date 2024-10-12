# CancelSurveyResult

Result of the cancel survey when the subscription was canceled by the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason the user selected in the cancel survey. | [optional] 
**reason_user_input** | **str** | Only set for CANCEL_SURVEY_REASON_OTHERS. This is the user&#39;s freeform response to the survey. | [optional] 

## Example

```python
from openapi_client.models.cancel_survey_result import CancelSurveyResult

# TODO update the JSON string below
json = "{}"
# create an instance of CancelSurveyResult from a JSON string
cancel_survey_result_instance = CancelSurveyResult.from_json(json)
# print the JSON string representation of the object
print(CancelSurveyResult.to_json())

# convert the object into a dict
cancel_survey_result_dict = cancel_survey_result_instance.to_dict()
# create an instance of CancelSurveyResult from a dict
cancel_survey_result_from_dict = CancelSurveyResult.from_dict(cancel_survey_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


