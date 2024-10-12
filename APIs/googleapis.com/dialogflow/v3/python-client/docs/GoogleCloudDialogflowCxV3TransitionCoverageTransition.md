# GoogleCloudDialogflowCxV3TransitionCoverageTransition

A transition in a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**covered** | **bool** | Whether the transition is covered by at least one of the agent&#39;s test cases. | [optional] 
**event_handler** | [**GoogleCloudDialogflowCxV3EventHandler**](GoogleCloudDialogflowCxV3EventHandler.md) |  | [optional] 
**index** | **int** | The index of a transition in the transition list. Starting from 0. | [optional] 
**source** | [**GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode**](GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode.md) |  | [optional] 
**target** | [**GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode**](GoogleCloudDialogflowCxV3TransitionCoverageTransitionNode.md) |  | [optional] 
**transition_route** | [**GoogleCloudDialogflowCxV3TransitionRoute**](GoogleCloudDialogflowCxV3TransitionRoute.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_transition_coverage_transition import GoogleCloudDialogflowCxV3TransitionCoverageTransition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TransitionCoverageTransition from a JSON string
google_cloud_dialogflow_cx_v3_transition_coverage_transition_instance = GoogleCloudDialogflowCxV3TransitionCoverageTransition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TransitionCoverageTransition.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_transition_coverage_transition_dict = google_cloud_dialogflow_cx_v3_transition_coverage_transition_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TransitionCoverageTransition from a dict
google_cloud_dialogflow_cx_v3_transition_coverage_transition_from_dict = GoogleCloudDialogflowCxV3TransitionCoverageTransition.from_dict(google_cloud_dialogflow_cx_v3_transition_coverage_transition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


