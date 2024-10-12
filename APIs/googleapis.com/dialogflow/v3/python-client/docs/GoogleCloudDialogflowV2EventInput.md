# GoogleCloudDialogflowV2EventInput

Events allow for matching intents by event name instead of the natural language input. For instance, input `` can trigger a personalized welcome response. The parameter `name` may be used by the agent in the response: `\"Hello #welcome_event.name! What can I do for you today?\"`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | Required. The language of this query. See [Language Support](https://cloud.google.com/dialogflow/docs/reference/language) for a list of the currently supported language codes. Note that queries in the same session do not necessarily need to specify the same language. This field is ignored when used in the context of a WebhookResponse.followup_event_input field, because the language was already defined in the originating detect intent request. | [optional] 
**name** | **str** | Required. The unique identifier of the event. | [optional] 
**parameters** | **Dict[str, object]** | The collection of parameters associated with the event. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter&#39;s entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter&#39;s entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_event_input import GoogleCloudDialogflowV2EventInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2EventInput from a JSON string
google_cloud_dialogflow_v2_event_input_instance = GoogleCloudDialogflowV2EventInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2EventInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_event_input_dict = google_cloud_dialogflow_v2_event_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2EventInput from a dict
google_cloud_dialogflow_v2_event_input_from_dict = GoogleCloudDialogflowV2EventInput.from_dict(google_cloud_dialogflow_v2_event_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


