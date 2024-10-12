# GoogleCloudDialogflowV2beta1ListConversationProfilesResponse

The response message for ConversationProfiles.ListConversationProfiles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversation_profiles** | [**List[GoogleCloudDialogflowV2beta1ConversationProfile]**](GoogleCloudDialogflowV2beta1ConversationProfile.md) | The list of project conversation profiles. There is a maximum number of items returned based on the page_size field in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_list_conversation_profiles_response import GoogleCloudDialogflowV2beta1ListConversationProfilesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ListConversationProfilesResponse from a JSON string
google_cloud_dialogflow_v2beta1_list_conversation_profiles_response_instance = GoogleCloudDialogflowV2beta1ListConversationProfilesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ListConversationProfilesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_list_conversation_profiles_response_dict = google_cloud_dialogflow_v2beta1_list_conversation_profiles_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ListConversationProfilesResponse from a dict
google_cloud_dialogflow_v2beta1_list_conversation_profiles_response_from_dict = GoogleCloudDialogflowV2beta1ListConversationProfilesResponse.from_dict(google_cloud_dialogflow_v2beta1_list_conversation_profiles_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


