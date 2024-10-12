# SubscriptionCancelSurveyResult

Information provided by the user when they complete the subscription cancellation flow (cancellation reason survey).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_survey_reason** | **int** | The cancellation reason the user chose in the survey. Possible values are:   - Other  - I don&#39;t use this service enough  - Technical issues  - Cost-related reasons  - I found a better app | [optional] 
**user_input_cancel_reason** | **str** | The customized input cancel reason from the user. Only present when cancelReason is 0. | [optional] 

## Example

```python
from openapi_client.models.subscription_cancel_survey_result import SubscriptionCancelSurveyResult

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionCancelSurveyResult from a JSON string
subscription_cancel_survey_result_instance = SubscriptionCancelSurveyResult.from_json(json)
# print the JSON string representation of the object
print(SubscriptionCancelSurveyResult.to_json())

# convert the object into a dict
subscription_cancel_survey_result_dict = subscription_cancel_survey_result_instance.to_dict()
# create an instance of SubscriptionCancelSurveyResult from a dict
subscription_cancel_survey_result_from_dict = SubscriptionCancelSurveyResult.from_dict(subscription_cancel_survey_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


