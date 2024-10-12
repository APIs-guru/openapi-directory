# GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse

The response message for SessionEntityTypes.ListSessionEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**session_entity_types** | [**List[GoogleCloudDialogflowV2beta1SessionEntityType]**](GoogleCloudDialogflowV2beta1SessionEntityType.md) | The list of session entity types. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_list_session_entity_types_response import GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse from a JSON string
google_cloud_dialogflow_v2beta1_list_session_entity_types_response_instance = GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_list_session_entity_types_response_dict = google_cloud_dialogflow_v2beta1_list_session_entity_types_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse from a dict
google_cloud_dialogflow_v2beta1_list_session_entity_types_response_from_dict = GoogleCloudDialogflowV2beta1ListSessionEntityTypesResponse.from_dict(google_cloud_dialogflow_v2beta1_list_session_entity_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


