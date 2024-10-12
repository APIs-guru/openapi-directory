# GoogleCloudDialogflowCxV3IntentCoverageIntent

The agent's intent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**covered** | **bool** | Whether the intent is covered by at least one of the agent&#39;s test cases. | [optional] 
**intent** | **str** | The intent full resource name | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_intent_coverage_intent import GoogleCloudDialogflowCxV3IntentCoverageIntent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3IntentCoverageIntent from a JSON string
google_cloud_dialogflow_cx_v3_intent_coverage_intent_instance = GoogleCloudDialogflowCxV3IntentCoverageIntent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3IntentCoverageIntent.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_intent_coverage_intent_dict = google_cloud_dialogflow_cx_v3_intent_coverage_intent_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3IntentCoverageIntent from a dict
google_cloud_dialogflow_cx_v3_intent_coverage_intent_from_dict = GoogleCloudDialogflowCxV3IntentCoverageIntent.from_dict(google_cloud_dialogflow_cx_v3_intent_coverage_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


