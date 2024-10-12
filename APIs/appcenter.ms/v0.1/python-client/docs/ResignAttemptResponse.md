# ResignAttemptResponse

URL that can be used to check the status of the update devices operation and the updated profiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | App ID that the resign operation is being performed against. | 
**context_id** | **str** | Context ID for the resigning operation. | 
**destinations** | **List[object]** | List of destinations that the resign operation is being performed against. | [optional] 
**error_code** | **str** | Error code associated with the exception. | [optional] 
**error_message** | **str** | Error message associated with the exception. | [optional] 
**original_release_id** | **float** | ID of the release which is being resigned. | 
**resign_id** | **str** | ID of the resign operation. | 
**start_time** | **float** | The time that the resign operation was started. | 
**status** | **str** | The status of the resigning operation. | 
**user_id** | **str** | ID of the user performing the resign operaiton. | 

## Example

```python
from openapi_client.models.resign_attempt_response import ResignAttemptResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResignAttemptResponse from a JSON string
resign_attempt_response_instance = ResignAttemptResponse.from_json(json)
# print the JSON string representation of the object
print(ResignAttemptResponse.to_json())

# convert the object into a dict
resign_attempt_response_dict = resign_attempt_response_instance.to_dict()
# create an instance of ResignAttemptResponse from a dict
resign_attempt_response_from_dict = ResignAttemptResponse.from_dict(resign_attempt_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


