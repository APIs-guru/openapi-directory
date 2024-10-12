# GoogleCloudDialogflowCxV3beta1Page

A Dialogflow CX conversation (session) can be described and visualized as a state machine. The states of a CX session are represented by pages. For each flow, you define many pages, where your combined pages can handle a complete conversation on the topics the flow is designed for. At any given moment, exactly one page is the current page, the current page is considered active, and the flow associated with that page is considered active. Every flow has a special start page. When a flow initially becomes active, the start page page becomes the current page. For each conversational turn, the current page will either stay the same or transition to another page. You configure each page to collect information from the end-user that is relevant for the conversational state represented by the page. For more information, see the [Page guide](https://cloud.google.com/dialogflow/cx/docs/concept/page).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advanced_settings** | [**GoogleCloudDialogflowCxV3beta1AdvancedSettings**](GoogleCloudDialogflowCxV3beta1AdvancedSettings.md) |  | [optional] 
**description** | **str** | The description of the page. The maximum length is 500 characters. | [optional] 
**display_name** | **str** | Required. The human-readable name of the page, unique within the flow. | [optional] 
**entry_fulfillment** | [**GoogleCloudDialogflowCxV3beta1Fulfillment**](GoogleCloudDialogflowCxV3beta1Fulfillment.md) |  | [optional] 
**event_handlers** | [**List[GoogleCloudDialogflowCxV3beta1EventHandler]**](GoogleCloudDialogflowCxV3beta1EventHandler.md) | Handlers associated with the page to handle events such as webhook errors, no match or no input. | [optional] 
**form** | [**GoogleCloudDialogflowCxV3beta1Form**](GoogleCloudDialogflowCxV3beta1Form.md) |  | [optional] 
**knowledge_connector_settings** | [**GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings**](GoogleCloudDialogflowCxV3beta1KnowledgeConnectorSettings.md) |  | [optional] 
**name** | **str** | The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. | [optional] 
**transition_route_groups** | **List[str]** | Ordered list of &#x60;TransitionRouteGroups&#x60; added to the page. Transition route groups must be unique within a page. If the page links both flow-level transition route groups and agent-level transition route groups, the flow-level ones will have higher priority and will be put before the agent-level ones. * If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page&#39;s transition route -&gt; page&#39;s transition route group -&gt; flow&#39;s transition routes. * If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence. Format:&#x60;projects//locations//agents//flows//transitionRouteGroups/&#x60; or &#x60;projects//locations//agents//transitionRouteGroups/&#x60; for agent-level groups. | [optional] 
**transition_routes** | [**List[GoogleCloudDialogflowCxV3beta1TransitionRoute]**](GoogleCloudDialogflowCxV3beta1TransitionRoute.md) | A list of transitions for the transition rules of this page. They route the conversation to another page in the same flow, or another flow. When we are in a certain page, the TransitionRoutes are evalauted in the following order: * TransitionRoutes defined in the page with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in flow with intent specified. * TransitionRoutes defined in the transition route groups with intent specified. * TransitionRoutes defined in the page with only condition specified. * TransitionRoutes defined in the transition route groups with only condition specified. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_page import GoogleCloudDialogflowCxV3beta1Page

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1Page from a JSON string
google_cloud_dialogflow_cx_v3beta1_page_instance = GoogleCloudDialogflowCxV3beta1Page.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1Page.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_page_dict = google_cloud_dialogflow_cx_v3beta1_page_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1Page from a dict
google_cloud_dialogflow_cx_v3beta1_page_from_dict = GoogleCloudDialogflowCxV3beta1Page.from_dict(google_cloud_dialogflow_cx_v3beta1_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


