# GoogleCloudDialogflowV2beta1QueryParameters

Represents the parameters of the conversational query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[GoogleCloudDialogflowV2beta1Context]**](GoogleCloudDialogflowV2beta1Context.md) | The collection of contexts to be activated before this query is executed. | [optional] 
**geo_location** | [**GoogleTypeLatLng**](GoogleTypeLatLng.md) |  | [optional] 
**knowledge_base_names** | **List[str]** | KnowledgeBases to get alternative results from. If not set, the KnowledgeBases enabled in the agent (through UI) will be used. Format: &#x60;projects//knowledgeBases/&#x60;. | [optional] 
**payload** | **Dict[str, object]** | This field can be used to pass custom data to your webhook. Arbitrary JSON objects are supported. If supplied, the value is used to populate the &#x60;WebhookRequest.original_detect_intent_request.payload&#x60; field sent to your webhook. | [optional] 
**platform** | **str** | The platform of the virtual agent response messages. If not empty, only emits messages from this platform in the response. Valid values are the enum names of platform. | [optional] 
**reset_contexts** | **bool** | Specifies whether to delete all contexts in the current session before the new ones are activated. | [optional] 
**sentiment_analysis_request_config** | [**GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig**](GoogleCloudDialogflowV2beta1SentimentAnalysisRequestConfig.md) |  | [optional] 
**session_entity_types** | [**List[GoogleCloudDialogflowV2beta1SessionEntityType]**](GoogleCloudDialogflowV2beta1SessionEntityType.md) | Additional session entity types to replace or extend developer entity types with. The entity synonyms apply to all languages and persist for the session of this query. | [optional] 
**sub_agents** | [**List[GoogleCloudDialogflowV2beta1SubAgent]**](GoogleCloudDialogflowV2beta1SubAgent.md) | For mega agent query, directly specify which sub agents to query. If any specified sub agent is not linked to the mega agent, an error will be returned. If empty, Dialogflow will decide which sub agents to query. If specified for a non-mega-agent query, will be silently ignored. | [optional] 
**time_zone** | **str** | The time zone of this conversational query from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. If not provided, the time zone specified in agent settings is used. | [optional] 
**webhook_headers** | **Dict[str, str]** | This field can be used to pass HTTP headers for a webhook call. These headers will be sent to webhook along with the headers that have been configured through Dialogflow web console. The headers defined within this field will overwrite the headers configured through Dialogflow console if there is a conflict. Header names are case-insensitive. Google&#39;s specified headers are not allowed. Including: \&quot;Host\&quot;, \&quot;Content-Length\&quot;, \&quot;Connection\&quot;, \&quot;From\&quot;, \&quot;User-Agent\&quot;, \&quot;Accept-Encoding\&quot;, \&quot;If-Modified-Since\&quot;, \&quot;If-None-Match\&quot;, \&quot;X-Forwarded-For\&quot;, etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_query_parameters import GoogleCloudDialogflowV2beta1QueryParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1QueryParameters from a JSON string
google_cloud_dialogflow_v2beta1_query_parameters_instance = GoogleCloudDialogflowV2beta1QueryParameters.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1QueryParameters.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_query_parameters_dict = google_cloud_dialogflow_v2beta1_query_parameters_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1QueryParameters from a dict
google_cloud_dialogflow_v2beta1_query_parameters_from_dict = GoogleCloudDialogflowV2beta1QueryParameters.from_dict(google_cloud_dialogflow_v2beta1_query_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


