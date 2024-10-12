# GoogleCloudDialogflowCxV3ListFlowsResponse

The response message for Flows.ListFlows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flows** | [**List[GoogleCloudDialogflowCxV3Flow]**](GoogleCloudDialogflowCxV3Flow.md) | The list of flows. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_list_flows_response import GoogleCloudDialogflowCxV3ListFlowsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ListFlowsResponse from a JSON string
google_cloud_dialogflow_cx_v3_list_flows_response_instance = GoogleCloudDialogflowCxV3ListFlowsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ListFlowsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_list_flows_response_dict = google_cloud_dialogflow_cx_v3_list_flows_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ListFlowsResponse from a dict
google_cloud_dialogflow_cx_v3_list_flows_response_from_dict = GoogleCloudDialogflowCxV3ListFlowsResponse.from_dict(google_cloud_dialogflow_cx_v3_list_flows_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


