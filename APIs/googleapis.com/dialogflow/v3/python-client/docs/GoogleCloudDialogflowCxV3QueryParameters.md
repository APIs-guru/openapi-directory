# GoogleCloudDialogflowCxV3QueryParameters

Represents the parameters of a conversational query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analyze_query_text_sentiment** | **bool** | Configures whether sentiment analysis should be performed. If not provided, sentiment analysis is not performed. | [optional] 
**channel** | **str** | The channel which this query is for. If specified, only the ResponseMessage associated with the channel will be returned. If no ResponseMessage is associated with the channel, it falls back to the ResponseMessage with unspecified channel. If unspecified, the ResponseMessage with unspecified channel will be returned. | [optional] 
**current_page** | **str** | The unique identifier of the page to override the current page in the session. Format: &#x60;projects//locations//agents//flows//pages/&#x60;. If &#x60;current_page&#x60; is specified, the previous state of the session will be ignored by Dialogflow, including the previous page and the previous session parameters. In most cases, current_page and parameters should be configured together to direct a session to a specific state. | [optional] 
**disable_webhook** | **bool** | Whether to disable webhook calls for this request. | [optional] 
**end_user_metadata** | **Dict[str, object]** | Optional. Information about the end-user to improve the relevance and accuracy of generative answers. This will be interpreted and used by a language model, so, for good results, the data should be self-descriptive, and in a simple structure. Example: &#x60;&#x60;&#x60;json { \&quot;subscription plan\&quot;: \&quot;Business Premium Plus\&quot;, \&quot;devices owned\&quot;: [ {\&quot;model\&quot;: \&quot;Google Pixel 7\&quot;}, {\&quot;model\&quot;: \&quot;Google Pixel Tablet\&quot;} ] } &#x60;&#x60;&#x60; | [optional] 
**flow_versions** | **List[str]** | A list of flow versions to override for the request. Format: &#x60;projects//locations//agents//flows//versions/&#x60;. If version 1 of flow X is included in this list, the traffic of flow X will go through version 1 regardless of the version configuration in the environment. Each flow can have at most one version specified in this list. | [optional] 
**geo_location** | [**GoogleTypeLatLng**](GoogleTypeLatLng.md) |  | [optional] 
**parameters** | **Dict[str, object]** | Additional parameters to be put into session parameters. To remove a parameter from the session, clients should explicitly set the parameter value to null. You can reference the session parameters in the agent with the following format: $session.params.parameter-id. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter&#39;s entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter&#39;s entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. | [optional] 
**payload** | **Dict[str, object]** | This field can be used to pass custom data into the webhook associated with the agent. Arbitrary JSON objects are supported. Some integrations that query a Dialogflow agent may provide additional information in the payload. In particular, for the Dialogflow Phone Gateway integration, this field has the form: &#x60;&#x60;&#x60; { \&quot;telephony\&quot;: { \&quot;caller_id\&quot;: \&quot;+18558363987\&quot; } } &#x60;&#x60;&#x60; | [optional] 
**search_config** | [**GoogleCloudDialogflowCxV3SearchConfig**](GoogleCloudDialogflowCxV3SearchConfig.md) |  | [optional] 
**session_entity_types** | [**List[GoogleCloudDialogflowCxV3SessionEntityType]**](GoogleCloudDialogflowCxV3SessionEntityType.md) | Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session of this query. | [optional] 
**session_ttl** | **str** | Optional. Configure lifetime of the Dialogflow session. By default, a Dialogflow session remains active and its data is stored for 30 minutes after the last request is sent for the session. This value should be no longer than 1 day. | [optional] 
**time_zone** | **str** | The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in the agent is used. | [optional] 
**webhook_headers** | **Dict[str, str]** | This field can be used to pass HTTP headers for a webhook call. These headers will be sent to webhook along with the headers that have been configured through Dialogflow web console. The headers defined within this field will overwrite the headers configured through Dialogflow console if there is a conflict. Header names are case-insensitive. Google&#39;s specified headers are not allowed. Including: \&quot;Host\&quot;, \&quot;Content-Length\&quot;, \&quot;Connection\&quot;, \&quot;From\&quot;, \&quot;User-Agent\&quot;, \&quot;Accept-Encoding\&quot;, \&quot;If-Modified-Since\&quot;, \&quot;If-None-Match\&quot;, \&quot;X-Forwarded-For\&quot;, etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_query_parameters import GoogleCloudDialogflowCxV3QueryParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3QueryParameters from a JSON string
google_cloud_dialogflow_cx_v3_query_parameters_instance = GoogleCloudDialogflowCxV3QueryParameters.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3QueryParameters.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_query_parameters_dict = google_cloud_dialogflow_cx_v3_query_parameters_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3QueryParameters from a dict
google_cloud_dialogflow_cx_v3_query_parameters_from_dict = GoogleCloudDialogflowCxV3QueryParameters.from_dict(google_cloud_dialogflow_cx_v3_query_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


