# GoogleCloudDialogflowV2SuggestionInput

Represents the selection of a suggestion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_record** | **str** | Required. The ID of a suggestion selected by the human agent. The suggestion(s) were generated in a previous call to request Dialogflow assist. The format is: &#x60;projects//locations//answerRecords/&#x60; where is an alphanumeric string. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_suggestion_input import GoogleCloudDialogflowV2SuggestionInput

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SuggestionInput from a JSON string
google_cloud_dialogflow_v2_suggestion_input_instance = GoogleCloudDialogflowV2SuggestionInput.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SuggestionInput.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_suggestion_input_dict = google_cloud_dialogflow_v2_suggestion_input_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SuggestionInput from a dict
google_cloud_dialogflow_v2_suggestion_input_from_dict = GoogleCloudDialogflowV2SuggestionInput.from_dict(google_cloud_dialogflow_v2_suggestion_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


