# GoogleCloudDialogflowCxV3beta1ListAgentsResponse

The response message for Agents.ListAgents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agents** | [**List[GoogleCloudDialogflowCxV3beta1Agent]**](GoogleCloudDialogflowCxV3beta1Agent.md) | The list of agents. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_list_agents_response import GoogleCloudDialogflowCxV3beta1ListAgentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1ListAgentsResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_list_agents_response_instance = GoogleCloudDialogflowCxV3beta1ListAgentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1ListAgentsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_list_agents_response_dict = google_cloud_dialogflow_cx_v3beta1_list_agents_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1ListAgentsResponse from a dict
google_cloud_dialogflow_cx_v3beta1_list_agents_response_from_dict = GoogleCloudDialogflowCxV3beta1ListAgentsResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_list_agents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


