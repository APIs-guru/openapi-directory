# GoogleCloudDialogflowV2beta1ListContextsResponse

The response message for Contexts.ListContexts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts** | [**List[GoogleCloudDialogflowV2beta1Context]**](GoogleCloudDialogflowV2beta1Context.md) | The list of contexts. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_list_contexts_response import GoogleCloudDialogflowV2beta1ListContextsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1ListContextsResponse from a JSON string
google_cloud_dialogflow_v2beta1_list_contexts_response_instance = GoogleCloudDialogflowV2beta1ListContextsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1ListContextsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_list_contexts_response_dict = google_cloud_dialogflow_v2beta1_list_contexts_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1ListContextsResponse from a dict
google_cloud_dialogflow_v2beta1_list_contexts_response_from_dict = GoogleCloudDialogflowV2beta1ListContextsResponse.from_dict(google_cloud_dialogflow_v2beta1_list_contexts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


