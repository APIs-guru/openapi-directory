# UserInitiatedCancellation

Information specific to cancellations initiated by users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_survey_result** | [**CancelSurveyResult**](CancelSurveyResult.md) |  | [optional] 
**cancel_time** | **str** | The time at which the subscription was canceled by the user. The user might still have access to the subscription after this time. Use line_items.expiry_time to determine if a user still has access. | [optional] 

## Example

```python
from openapi_client.models.user_initiated_cancellation import UserInitiatedCancellation

# TODO update the JSON string below
json = "{}"
# create an instance of UserInitiatedCancellation from a JSON string
user_initiated_cancellation_instance = UserInitiatedCancellation.from_json(json)
# print the JSON string representation of the object
print(UserInitiatedCancellation.to_json())

# convert the object into a dict
user_initiated_cancellation_dict = user_initiated_cancellation_instance.to_dict()
# create an instance of UserInitiatedCancellation from a dict
user_initiated_cancellation_from_dict = UserInitiatedCancellation.from_dict(user_initiated_cancellation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


