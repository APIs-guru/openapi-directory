# GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition

A transition coverage in a transition route group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**covered** | **bool** | Whether the transition route is covered by at least one of the agent&#39;s test cases. | [optional] 
**transition_route** | [**GoogleCloudDialogflowCxV3beta1TransitionRoute**](GoogleCloudDialogflowCxV3beta1TransitionRoute.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_transition import GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition from a JSON string
google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_transition_instance = GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_transition_dict = google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_transition_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition from a dict
google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_transition_from_dict = GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition.from_dict(google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_transition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


