# ActivityAttemptOpenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **str** |  | [optional] 
**activity_type** | **str** |  | [optional] 
**feedback** | [**ActivityAttemptOpenResponseFeedback**](ActivityAttemptOpenResponseFeedback.md) |  | [optional] 
**learner_email** | **str** |  | [optional] 
**offering_id** | **str** |  | [optional] 
**response_text** | **str** |  | [optional] 
**uploaded_files** | [**ActivityAttemptOpenResponseFiles**](ActivityAttemptOpenResponseFiles.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_attempt_open_response import ActivityAttemptOpenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityAttemptOpenResponse from a JSON string
activity_attempt_open_response_instance = ActivityAttemptOpenResponse.from_json(json)
# print the JSON string representation of the object
print(ActivityAttemptOpenResponse.to_json())

# convert the object into a dict
activity_attempt_open_response_dict = activity_attempt_open_response_instance.to_dict()
# create an instance of ActivityAttemptOpenResponse from a dict
activity_attempt_open_response_from_dict = ActivityAttemptOpenResponse.from_dict(activity_attempt_open_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


