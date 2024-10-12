# GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage

Coverage result message for one transition route group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverage_score** | **float** | The percent of transition routes in the transition route group that are covered. | [optional] 
**route_group** | [**GoogleCloudDialogflowCxV3beta1TransitionRouteGroup**](GoogleCloudDialogflowCxV3beta1TransitionRouteGroup.md) |  | [optional] 
**transitions** | [**List[GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition]**](GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverageTransition.md) | The list of transition routes and coverage in the transition route group. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage import GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage from a JSON string
google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_instance = GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_dict = google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage from a dict
google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_from_dict = GoogleCloudDialogflowCxV3beta1TransitionRouteGroupCoverageCoverage.from_dict(google_cloud_dialogflow_cx_v3beta1_transition_route_group_coverage_coverage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


