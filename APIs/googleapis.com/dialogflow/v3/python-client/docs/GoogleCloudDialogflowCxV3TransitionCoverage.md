# GoogleCloudDialogflowCxV3TransitionCoverage

Transition coverage represents the percentage of all possible page transitions (page-level transition routes and event handlers, excluding transition route groups) present within any of a parent's test cases.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverage_score** | **float** | The percent of transitions in the agent that are covered. | [optional] 
**transitions** | [**List[GoogleCloudDialogflowCxV3TransitionCoverageTransition]**](GoogleCloudDialogflowCxV3TransitionCoverageTransition.md) | The list of Transitions present in the agent. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_transition_coverage import GoogleCloudDialogflowCxV3TransitionCoverage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TransitionCoverage from a JSON string
google_cloud_dialogflow_cx_v3_transition_coverage_instance = GoogleCloudDialogflowCxV3TransitionCoverage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TransitionCoverage.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_transition_coverage_dict = google_cloud_dialogflow_cx_v3_transition_coverage_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TransitionCoverage from a dict
google_cloud_dialogflow_cx_v3_transition_coverage_from_dict = GoogleCloudDialogflowCxV3TransitionCoverage.from_dict(google_cloud_dialogflow_cx_v3_transition_coverage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


