# GoogleCloudDialogflowCxV3TestCaseResult

Represents a result from running a test case in an agent environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_turns** | [**List[GoogleCloudDialogflowCxV3ConversationTurn]**](GoogleCloudDialogflowCxV3ConversationTurn.md) | The conversation turns uttered during the test case replay in chronological order. | [optional] 
**environment** | **str** | Environment where the test was run. If not set, it indicates the draft environment. | [optional] 
**name** | **str** | The resource name for the test case result. Format: &#x60;projects//locations//agents//testCases/ /results/&#x60;. | [optional] 
**test_result** | **str** | Whether the test case passed in the agent environment. | [optional] 
**test_time** | **str** | The time that the test was run. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_test_case_result import GoogleCloudDialogflowCxV3TestCaseResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TestCaseResult from a JSON string
google_cloud_dialogflow_cx_v3_test_case_result_instance = GoogleCloudDialogflowCxV3TestCaseResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TestCaseResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_test_case_result_dict = google_cloud_dialogflow_cx_v3_test_case_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TestCaseResult from a dict
google_cloud_dialogflow_cx_v3_test_case_result_from_dict = GoogleCloudDialogflowCxV3TestCaseResult.from_dict(google_cloud_dialogflow_cx_v3_test_case_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


