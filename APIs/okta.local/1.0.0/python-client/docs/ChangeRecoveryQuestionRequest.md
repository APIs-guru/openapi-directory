# ChangeRecoveryQuestionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | [**ChangePasswordRequestOldPassword**](ChangePasswordRequestOldPassword.md) |  | [optional] 
**recovery_question** | [**ChangeRecoveryQuestionRequestRecoveryQuestion**](ChangeRecoveryQuestionRequestRecoveryQuestion.md) |  | [optional] 

## Example

```python
from openapi_client.models.change_recovery_question_request import ChangeRecoveryQuestionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeRecoveryQuestionRequest from a JSON string
change_recovery_question_request_instance = ChangeRecoveryQuestionRequest.from_json(json)
# print the JSON string representation of the object
print(ChangeRecoveryQuestionRequest.to_json())

# convert the object into a dict
change_recovery_question_request_dict = change_recovery_question_request_instance.to_dict()
# create an instance of ChangeRecoveryQuestionRequest from a dict
change_recovery_question_request_from_dict = ChangeRecoveryQuestionRequest.from_dict(change_recovery_question_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


