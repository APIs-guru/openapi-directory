# GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse

The response message for Environments.ListEnvironments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environments** | [**List[GoogleCloudDialogflowCxV3beta1Environment]**](GoogleCloudDialogflowCxV3beta1Environment.md) | The list of environments. There will be a maximum number of items returned based on the page_size field in the request. The list may in some cases be empty or contain fewer entries than page_size even if this isn&#39;t the last page. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_list_environments_response import GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_list_environments_response_instance = GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_list_environments_response_dict = google_cloud_dialogflow_cx_v3beta1_list_environments_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse from a dict
google_cloud_dialogflow_cx_v3beta1_list_environments_response_from_dict = GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_list_environments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


