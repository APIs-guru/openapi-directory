# GoogleCloudDialogflowCxV3TransitionRoute

A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **str** | The condition to evaluate against form parameters or session parameters. See the [conditions reference](https://cloud.google.com/dialogflow/cx/docs/reference/condition). At least one of &#x60;intent&#x60; or &#x60;condition&#x60; must be specified. When both &#x60;intent&#x60; and &#x60;condition&#x60; are specified, the transition can only happen when both are fulfilled. | [optional] 
**description** | **str** | Optional. The description of the transition route. The maximum length is 500 characters. | [optional] 
**intent** | **str** | The unique identifier of an Intent. Format: &#x60;projects//locations//agents//intents/&#x60;. Indicates that the transition can only happen when the given intent is matched. At least one of &#x60;intent&#x60; or &#x60;condition&#x60; must be specified. When both &#x60;intent&#x60; and &#x60;condition&#x60; are specified, the transition can only happen when both are fulfilled. | [optional] 
**name** | **str** | Output only. The unique identifier of this transition route. | [optional] [readonly] 
**target_flow** | **str** | The target flow to transition to. Format: &#x60;projects//locations//agents//flows/&#x60;. | [optional] 
**target_page** | **str** | The target page to transition to. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. | [optional] 
**trigger_fulfillment** | [**GoogleCloudDialogflowCxV3Fulfillment**](GoogleCloudDialogflowCxV3Fulfillment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_transition_route import GoogleCloudDialogflowCxV3TransitionRoute

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3TransitionRoute from a JSON string
google_cloud_dialogflow_cx_v3_transition_route_instance = GoogleCloudDialogflowCxV3TransitionRoute.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3TransitionRoute.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_transition_route_dict = google_cloud_dialogflow_cx_v3_transition_route_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3TransitionRoute from a dict
google_cloud_dialogflow_cx_v3_transition_route_from_dict = GoogleCloudDialogflowCxV3TransitionRoute.from_dict(google_cloud_dialogflow_cx_v3_transition_route_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


