# GoogleCloudDialogflowV2SearchAgentsResponse

The response message for Agents.SearchAgents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agents** | [**List[GoogleCloudDialogflowV2Agent]**](GoogleCloudDialogflowV2Agent.md) | The list of agents. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_search_agents_response import GoogleCloudDialogflowV2SearchAgentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2SearchAgentsResponse from a JSON string
google_cloud_dialogflow_v2_search_agents_response_instance = GoogleCloudDialogflowV2SearchAgentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2SearchAgentsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_search_agents_response_dict = google_cloud_dialogflow_v2_search_agents_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2SearchAgentsResponse from a dict
google_cloud_dialogflow_v2_search_agents_response_from_dict = GoogleCloudDialogflowV2SearchAgentsResponse.from_dict(google_cloud_dialogflow_v2_search_agents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


