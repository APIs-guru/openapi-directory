# GoogleCloudDialogflowV2beta1Context

Dialogflow contexts are similar to natural language context. If a person says to you \"they are orange\", you need context in order to understand what \"they\" is referring to. Similarly, for Dialogflow to handle an end-user expression like that, it needs to be provided with context in order to correctly match an intent. Using contexts, you can control the flow of a conversation. You can configure contexts for an intent by setting input and output contexts, which are identified by string names. When an intent is matched, any configured output contexts for that intent become active. While any contexts are active, Dialogflow is more likely to match intents that are configured with input contexts that correspond to the currently active contexts. For more information about context, see the [Contexts guide](https://cloud.google.com/dialogflow/docs/contexts-overview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lifespan_count** | **int** | Optional. The number of conversational query requests after which the context expires. The default is &#x60;0&#x60;. If set to &#x60;0&#x60;, the context expires immediately. Contexts expire automatically after 20 minutes if there are no matching queries. | [optional] 
**name** | **str** | Required. The unique identifier of the context. Supported formats: - &#x60;projects//agent/sessions//contexts/&#x60;, - &#x60;projects//locations//agent/sessions//contexts/&#x60;, - &#x60;projects//agent/environments//users//sessions//contexts/&#x60;, - &#x60;projects//locations//agent/environments//users//sessions//contexts/&#x60;, The &#x60;Context ID&#x60; is always converted to lowercase, may only contain characters in &#x60;a-zA-Z0-9_-%&#x60; and may be at most 250 bytes long. If &#x60;Environment ID&#x60; is not specified, we assume default &#39;draft&#39; environment. If &#x60;User ID&#x60; is not specified, we assume default &#39;-&#39; user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * &#x60;__system_counters__&#x60; * &#x60;*_id_dialog_context&#x60; * &#x60;*_dialog_params_size&#x60; | [optional] 
**parameters** | **Dict[str, object]** | Optional. The collection of parameters associated with this context. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter&#39;s entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter&#39;s entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_context import GoogleCloudDialogflowV2beta1Context

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1Context from a JSON string
google_cloud_dialogflow_v2beta1_context_instance = GoogleCloudDialogflowV2beta1Context.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1Context.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_context_dict = google_cloud_dialogflow_v2beta1_context_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1Context from a dict
google_cloud_dialogflow_v2beta1_context_from_dict = GoogleCloudDialogflowV2beta1Context.from_dict(google_cloud_dialogflow_v2beta1_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


