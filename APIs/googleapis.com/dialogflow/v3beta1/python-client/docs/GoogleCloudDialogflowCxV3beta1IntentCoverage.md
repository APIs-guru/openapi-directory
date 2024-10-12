# GoogleCloudDialogflowCxV3beta1IntentCoverage

Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverage_score** | **float** | The percent of intents in the agent that are covered. | [optional] 
**intents** | [**List[GoogleCloudDialogflowCxV3beta1IntentCoverageIntent]**](GoogleCloudDialogflowCxV3beta1IntentCoverageIntent.md) | The list of Intents present in the agent | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_intent_coverage import GoogleCloudDialogflowCxV3beta1IntentCoverage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1IntentCoverage from a JSON string
google_cloud_dialogflow_cx_v3beta1_intent_coverage_instance = GoogleCloudDialogflowCxV3beta1IntentCoverage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1IntentCoverage.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_intent_coverage_dict = google_cloud_dialogflow_cx_v3beta1_intent_coverage_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1IntentCoverage from a dict
google_cloud_dialogflow_cx_v3beta1_intent_coverage_from_dict = GoogleCloudDialogflowCxV3beta1IntentCoverage.from_dict(google_cloud_dialogflow_cx_v3beta1_intent_coverage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


