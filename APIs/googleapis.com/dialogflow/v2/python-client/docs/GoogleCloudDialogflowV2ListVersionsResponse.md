# GoogleCloudDialogflowV2ListVersionsResponse

The response message for Versions.ListVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**versions** | [**List[GoogleCloudDialogflowV2Version]**](GoogleCloudDialogflowV2Version.md) | The list of agent versions. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_list_versions_response import GoogleCloudDialogflowV2ListVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ListVersionsResponse from a JSON string
google_cloud_dialogflow_v2_list_versions_response_instance = GoogleCloudDialogflowV2ListVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ListVersionsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_list_versions_response_dict = google_cloud_dialogflow_v2_list_versions_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ListVersionsResponse from a dict
google_cloud_dialogflow_v2_list_versions_response_from_dict = GoogleCloudDialogflowV2ListVersionsResponse.from_dict(google_cloud_dialogflow_v2_list_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


