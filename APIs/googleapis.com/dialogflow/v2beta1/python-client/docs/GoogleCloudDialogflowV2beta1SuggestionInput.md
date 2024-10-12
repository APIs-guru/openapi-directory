# GoogleCloudDialogflowV2beta1SuggestionInput

Represents the selection of a suggestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_record** | **str** | Required. The ID of a suggestion selected by the human agent. The suggestion(s) were generated in a previous call to request Dialogflow assist. The format is: &#x60;projects//locations//answerRecords/&#x60; where is an alphanumeric string. | [optional] 
**intent_input** | [**GoogleCloudDialogflowV2beta1IntentInput**](GoogleCloudDialogflowV2beta1IntentInput.md) |  | [optional] 
**parameters** | **Dict[str, object]** | In Dialogflow assist for v3, the user can submit a form by sending a SuggestionInput. The form is uniquely determined by the answer_record field, which identifies a v3 QueryResult containing the current page. The form parameters are specified via the parameters field. Depending on your protocol or client library language, this is a map, associative array, symbol table, dictionary, or JSON object composed of a collection of (MapKey, MapValue) pairs: * MapKey type: string * MapKey value: parameter name * MapValue type: If parameter&#39;s entity type is a composite entity then use map, otherwise, depending on the parameter value type, it could be one of string, number, boolean, null, list or map. * MapValue value: If parameter&#39;s entity type is a composite entity then use map from composite entity property names to property values, otherwise, use parameter value. | [optional] 
**text_override** | [**GoogleCloudDialogflowV2beta1TextInput**](GoogleCloudDialogflowV2beta1TextInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_suggestion_input import GoogleCloudDialogflowV2beta1SuggestionInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1SuggestionInput from a JSON string
google_cloud_dialogflow_v2beta1_suggestion_input_instance = GoogleCloudDialogflowV2beta1SuggestionInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1SuggestionInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_suggestion_input_dict = google_cloud_dialogflow_v2beta1_suggestion_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1SuggestionInput from a dict
google_cloud_dialogflow_v2beta1_suggestion_input_from_dict = GoogleCloudDialogflowV2beta1SuggestionInput.from_dict(google_cloud_dialogflow_v2beta1_suggestion_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


