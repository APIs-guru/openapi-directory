# GoogleCloudDialogflowCxV3IntentCoverage

Intent coverage represents the percentage of all possible intents in the agent that are triggered in any of a parent's test cases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverage_score** | **float** | The percent of intents in the agent that are covered. | [optional] 
**intents** | [**List[GoogleCloudDialogflowCxV3IntentCoverageIntent]**](GoogleCloudDialogflowCxV3IntentCoverageIntent.md) | The list of Intents present in the agent | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_intent_coverage import GoogleCloudDialogflowCxV3IntentCoverage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3IntentCoverage from a JSON string
google_cloud_dialogflow_cx_v3_intent_coverage_instance = GoogleCloudDialogflowCxV3IntentCoverage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3IntentCoverage.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_intent_coverage_dict = google_cloud_dialogflow_cx_v3_intent_coverage_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3IntentCoverage from a dict
google_cloud_dialogflow_cx_v3_intent_coverage_from_dict = GoogleCloudDialogflowCxV3IntentCoverage.from_dict(google_cloud_dialogflow_cx_v3_intent_coverage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


