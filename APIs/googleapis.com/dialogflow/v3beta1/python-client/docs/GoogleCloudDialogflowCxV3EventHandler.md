# GoogleCloudDialogflowCxV3EventHandler

An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event** | **str** | Required. The name of the event to handle. | [optional] 
**name** | **str** | Output only. The unique identifier of this event handler. | [optional] [readonly] 
**target_flow** | **str** | The target flow to transition to. Format: &#x60;projects//locations//agents//flows/&#x60;. | [optional] 
**target_page** | **str** | The target page to transition to. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. | [optional] 
**trigger_fulfillment** | [**GoogleCloudDialogflowCxV3Fulfillment**](GoogleCloudDialogflowCxV3Fulfillment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_event_handler import GoogleCloudDialogflowCxV3EventHandler

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3EventHandler from a JSON string
google_cloud_dialogflow_cx_v3_event_handler_instance = GoogleCloudDialogflowCxV3EventHandler.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3EventHandler.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_event_handler_dict = google_cloud_dialogflow_cx_v3_event_handler_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3EventHandler from a dict
google_cloud_dialogflow_cx_v3_event_handler_from_dict = GoogleCloudDialogflowCxV3EventHandler.from_dict(google_cloud_dialogflow_cx_v3_event_handler_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


