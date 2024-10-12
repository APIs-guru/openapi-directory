# GoogleCloudDialogflowV2beta1ListSuggestionsResponse

The response message for Participants.ListSuggestions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Optional. Token to retrieve the next page of results or empty if there are no more results in the list. | [optional] 
**suggestions** | [**List[GoogleCloudDialogflowV2beta1Suggestion]**](GoogleCloudDialogflowV2beta1Suggestion.md) | Required. The list of suggestions. There will be a maximum number of items returned based on the page_size field in the request. &#x60;suggestions&#x60; is sorted by &#x60;create_time&#x60; in descending order. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_list_suggestions_response import GoogleCloudDialogflowV2beta1ListSuggestionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ListSuggestionsResponse from a JSON string
google_cloud_dialogflow_v2beta1_list_suggestions_response_instance = GoogleCloudDialogflowV2beta1ListSuggestionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ListSuggestionsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_list_suggestions_response_dict = google_cloud_dialogflow_v2beta1_list_suggestions_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ListSuggestionsResponse from a dict
google_cloud_dialogflow_v2beta1_list_suggestions_response_from_dict = GoogleCloudDialogflowV2beta1ListSuggestionsResponse.from_dict(google_cloud_dialogflow_v2beta1_list_suggestions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


