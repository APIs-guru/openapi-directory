# GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse

The response message for Environments.LookupEnvironmentHistory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environments** | [**List[GoogleCloudDialogflowCxV3beta1Environment]**](GoogleCloudDialogflowCxV3beta1Environment.md) | Represents a list of snapshots for an environment. Time of the snapshots is stored in &#x60;update_time&#x60;. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_lookup_environment_history_response import GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse from a JSON string
google_cloud_dialogflow_cx_v3beta1_lookup_environment_history_response_instance = GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_lookup_environment_history_response_dict = google_cloud_dialogflow_cx_v3beta1_lookup_environment_history_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse from a dict
google_cloud_dialogflow_cx_v3beta1_lookup_environment_history_response_from_dict = GoogleCloudDialogflowCxV3beta1LookupEnvironmentHistoryResponse.from_dict(google_cloud_dialogflow_cx_v3beta1_lookup_environment_history_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


