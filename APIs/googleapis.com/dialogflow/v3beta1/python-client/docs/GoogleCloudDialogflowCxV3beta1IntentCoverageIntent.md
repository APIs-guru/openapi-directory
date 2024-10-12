# GoogleCloudDialogflowCxV3beta1IntentCoverageIntent

The agent's intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**covered** | **bool** | Whether the intent is covered by at least one of the agent&#39;s test cases. | [optional] 
**intent** | **str** | The intent full resource name | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_intent_coverage_intent import GoogleCloudDialogflowCxV3beta1IntentCoverageIntent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1IntentCoverageIntent from a JSON string
google_cloud_dialogflow_cx_v3beta1_intent_coverage_intent_instance = GoogleCloudDialogflowCxV3beta1IntentCoverageIntent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1IntentCoverageIntent.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_intent_coverage_intent_dict = google_cloud_dialogflow_cx_v3beta1_intent_coverage_intent_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1IntentCoverageIntent from a dict
google_cloud_dialogflow_cx_v3beta1_intent_coverage_intent_from_dict = GoogleCloudDialogflowCxV3beta1IntentCoverageIntent.from_dict(google_cloud_dialogflow_cx_v3beta1_intent_coverage_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


