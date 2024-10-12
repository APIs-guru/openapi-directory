# GoogleCloudDialogflowCxV3TestCase

Represents a test case.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_time** | **str** | Output only. When the test was created. | [optional] [readonly] 
**display_name** | **str** | Required. The human-readable name of the test case, unique within the agent. Limit of 200 characters. | [optional] 
**last_test_result** | [**GoogleCloudDialogflowCxV3TestCaseResult**](GoogleCloudDialogflowCxV3TestCaseResult.md) |  | [optional] 
**name** | **str** | The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: &#x60;projects//locations//agents/ /testCases/&#x60;. | [optional] 
**notes** | **str** | Additional freeform notes about the test case. Limit of 400 characters. | [optional] 
**tags** | **List[str]** | Tags are short descriptions that users may apply to test cases for organizational and filtering purposes. Each tag should start with \&quot;#\&quot; and has a limit of 30 characters. | [optional] 
**test_case_conversation_turns** | [**List[GoogleCloudDialogflowCxV3ConversationTurn]**](GoogleCloudDialogflowCxV3ConversationTurn.md) | The conversation turns uttered when the test case was created, in chronological order. These include the canonical set of agent utterances that should occur when the agent is working properly. | [optional] 
**test_config** | [**GoogleCloudDialogflowCxV3TestConfig**](GoogleCloudDialogflowCxV3TestConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_test_case import GoogleCloudDialogflowCxV3TestCase

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TestCase from a JSON string
google_cloud_dialogflow_cx_v3_test_case_instance = GoogleCloudDialogflowCxV3TestCase.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TestCase.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_test_case_dict = google_cloud_dialogflow_cx_v3_test_case_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TestCase from a dict
google_cloud_dialogflow_cx_v3_test_case_from_dict = GoogleCloudDialogflowCxV3TestCase.from_dict(google_cloud_dialogflow_cx_v3_test_case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


