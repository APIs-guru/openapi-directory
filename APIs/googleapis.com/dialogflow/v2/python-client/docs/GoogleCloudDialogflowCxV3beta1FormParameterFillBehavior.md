# GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior

Configuration for how the filling of a parameter should be handled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initial_prompt_fulfillment** | [**GoogleCloudDialogflowCxV3beta1Fulfillment**](GoogleCloudDialogflowCxV3beta1Fulfillment.md) |  | [optional] 
**reprompt_event_handlers** | [**List[GoogleCloudDialogflowCxV3beta1EventHandler]**](GoogleCloudDialogflowCxV3beta1EventHandler.md) | The handlers for parameter-level events, used to provide reprompt for the parameter or transition to a different page/flow. The supported events are: * &#x60;sys.no-match-&#x60;, where N can be from 1 to 6 * &#x60;sys.no-match-default&#x60; * &#x60;sys.no-input-&#x60;, where N can be from 1 to 6 * &#x60;sys.no-input-default&#x60; * &#x60;sys.invalid-parameter&#x60; &#x60;initial_prompt_fulfillment&#x60; provides the first prompt for the parameter. If the user&#39;s response does not fill the parameter, a no-match/no-input event will be triggered, and the fulfillment associated with the &#x60;sys.no-match-1&#x60;/&#x60;sys.no-input-1&#x60; handler (if defined) will be called to provide a prompt. The &#x60;sys.no-match-2&#x60;/&#x60;sys.no-input-2&#x60; handler (if defined) will respond to the next no-match/no-input event, and so on. A &#x60;sys.no-match-default&#x60; or &#x60;sys.no-input-default&#x60; handler will be used to handle all following no-match/no-input events after all numbered no-match/no-input handlers for the parameter are consumed. A &#x60;sys.invalid-parameter&#x60; handler can be defined to handle the case where the parameter values have been &#x60;invalidated&#x60; by webhook. For example, if the user&#39;s response fill the parameter, however the parameter was invalidated by webhook, the fulfillment associated with the &#x60;sys.invalid-parameter&#x60; handler (if defined) will be called to provide a prompt. If the event handler for the corresponding event can&#39;t be found on the parameter, &#x60;initial_prompt_fulfillment&#x60; will be re-prompted. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_form_parameter_fill_behavior import GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior from a JSON string
google_cloud_dialogflow_cx_v3beta1_form_parameter_fill_behavior_instance = GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_form_parameter_fill_behavior_dict = google_cloud_dialogflow_cx_v3beta1_form_parameter_fill_behavior_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior from a dict
google_cloud_dialogflow_cx_v3beta1_form_parameter_fill_behavior_from_dict = GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior.from_dict(google_cloud_dialogflow_cx_v3beta1_form_parameter_fill_behavior_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


