# GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition

A transition coverage in a transition route group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**covered** | **bool** | Whether the transition route is covered by at least one of the agent&#39;s test cases. | [optional] 
**transition_route** | [**GoogleCloudDialogflowCxV3TransitionRoute**](GoogleCloudDialogflowCxV3TransitionRoute.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_transition_route_group_coverage_coverage_transition import GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition from a JSON string
google_cloud_dialogflow_cx_v3_transition_route_group_coverage_coverage_transition_instance = GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_transition_route_group_coverage_coverage_transition_dict = google_cloud_dialogflow_cx_v3_transition_route_group_coverage_coverage_transition_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition from a dict
google_cloud_dialogflow_cx_v3_transition_route_group_coverage_coverage_transition_from_dict = GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverageTransition.from_dict(google_cloud_dialogflow_cx_v3_transition_route_group_coverage_coverage_transition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


