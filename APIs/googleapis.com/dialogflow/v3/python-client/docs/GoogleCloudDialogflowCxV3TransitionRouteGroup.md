# GoogleCloudDialogflowCxV3TransitionRouteGroup

A TransitionRouteGroup represents a group of `TransitionRoutes` to be used by a Page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. The human-readable name of the transition route group, unique within the flow. The display name can be no longer than 30 characters. | [optional] 
**name** | **str** | The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: &#x60;projects//locations//agents//flows//transitionRouteGroups/&#x60; . | [optional] 
**transition_routes** | [**List[GoogleCloudDialogflowCxV3TransitionRoute]**](GoogleCloudDialogflowCxV3TransitionRoute.md) | Transition routes associated with the TransitionRouteGroup. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_transition_route_group import GoogleCloudDialogflowCxV3TransitionRouteGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TransitionRouteGroup from a JSON string
google_cloud_dialogflow_cx_v3_transition_route_group_instance = GoogleCloudDialogflowCxV3TransitionRouteGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TransitionRouteGroup.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_transition_route_group_dict = google_cloud_dialogflow_cx_v3_transition_route_group_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TransitionRouteGroup from a dict
google_cloud_dialogflow_cx_v3_transition_route_group_from_dict = GoogleCloudDialogflowCxV3TransitionRouteGroup.from_dict(google_cloud_dialogflow_cx_v3_transition_route_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


