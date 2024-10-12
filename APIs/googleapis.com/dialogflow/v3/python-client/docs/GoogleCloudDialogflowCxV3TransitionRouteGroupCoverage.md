# GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage

Transition route group coverage represents the percentage of all possible transition routes present within any of a parent's test cases. The results are grouped by the transition route group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverage_score** | **float** | The percent of transition routes in all the transition route groups that are covered. | [optional] 
**coverages** | [**List[GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage]**](GoogleCloudDialogflowCxV3TransitionRouteGroupCoverageCoverage.md) | Transition route group coverages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_transition_route_group_coverage import GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage from a JSON string
google_cloud_dialogflow_cx_v3_transition_route_group_coverage_instance = GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_transition_route_group_coverage_dict = google_cloud_dialogflow_cx_v3_transition_route_group_coverage_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage from a dict
google_cloud_dialogflow_cx_v3_transition_route_group_coverage_from_dict = GoogleCloudDialogflowCxV3TransitionRouteGroupCoverage.from_dict(google_cloud_dialogflow_cx_v3_transition_route_group_coverage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


