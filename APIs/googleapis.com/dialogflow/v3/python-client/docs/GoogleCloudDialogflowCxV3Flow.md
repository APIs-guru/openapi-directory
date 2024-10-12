# GoogleCloudDialogflowCxV3Flow

Flows represents the conversation flows when you build your chatbot agent. A flow consists of many pages connected by the transition routes. Conversations always start with the built-in Start Flow (with an all-0 ID). Transition routes can direct the conversation session from the current flow (parent flow) to another flow (sub flow). When the sub flow is finished, Dialogflow will bring the session back to the parent flow, where the sub flow is started. Usually, when a transition route is followed by a matched intent, the intent will be \"consumed\". This means the intent won't activate more transition routes. However, when the followed transition route moves the conversation session into a different flow, the matched intent can be carried over and to be consumed in the target flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_settings** | [**GoogleCloudDialogflowCxV3AdvancedSettings**](GoogleCloudDialogflowCxV3AdvancedSettings.md) |  | [optional] 
**description** | **str** | The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected. | [optional] 
**display_name** | **str** | Required. The human-readable name of the flow. | [optional] 
**event_handlers** | [**List[GoogleCloudDialogflowCxV3EventHandler]**](GoogleCloudDialogflowCxV3EventHandler.md) | A flow&#39;s event handlers serve two purposes: * They are responsible for handling events (e.g. no match, webhook errors) in the flow. * They are inherited by every page&#39;s event handlers, which can be used to handle common events regardless of the current page. Event handlers defined in the page have higher priority than those defined in the flow. Unlike transition_routes, these handlers are evaluated on a first-match basis. The first one that matches the event get executed, with the rest being ignored. | [optional] 
**knowledge_connector_settings** | [**GoogleCloudDialogflowCxV3KnowledgeConnectorSettings**](GoogleCloudDialogflowCxV3KnowledgeConnectorSettings.md) |  | [optional] 
**name** | **str** | The unique identifier of the flow. Format: &#x60;projects//locations//agents//flows/&#x60;. | [optional] 
**nlu_settings** | [**GoogleCloudDialogflowCxV3NluSettings**](GoogleCloudDialogflowCxV3NluSettings.md) |  | [optional] 
**transition_route_groups** | **List[str]** | A flow&#39;s transition route group serve two purposes: * They are responsible for matching the user&#39;s first utterances in the flow. * They are inherited by every page&#39;s transition route groups. Transition route groups defined in the page have higher priority than those defined in the flow. Format:&#x60;projects//locations//agents//flows//transitionRouteGroups/&#x60; or &#x60;projects//locations//agents//transitionRouteGroups/&#x60; for agent-level groups. | [optional] 
**transition_routes** | [**List[GoogleCloudDialogflowCxV3TransitionRoute]**](GoogleCloudDialogflowCxV3TransitionRoute.md) | A flow&#39;s transition routes serve two purposes: * They are responsible for matching the user&#39;s first utterances in the flow. * They are inherited by every page&#39;s transition routes and can support use cases such as the user saying \&quot;help\&quot; or \&quot;can I talk to a human?\&quot;, which can be handled in a common way regardless of the current page. Transition routes defined in the page have higher priority than those defined in the flow. TransitionRoutes are evalauted in the following order: * TransitionRoutes with intent specified. * TransitionRoutes with only condition specified. TransitionRoutes with intent specified are inherited by pages in the flow. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_flow import GoogleCloudDialogflowCxV3Flow

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3Flow from a JSON string
google_cloud_dialogflow_cx_v3_flow_instance = GoogleCloudDialogflowCxV3Flow.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3Flow.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_flow_dict = google_cloud_dialogflow_cx_v3_flow_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3Flow from a dict
google_cloud_dialogflow_cx_v3_flow_from_dict = GoogleCloudDialogflowCxV3Flow.from_dict(google_cloud_dialogflow_cx_v3_flow_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


