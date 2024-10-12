# GoogleCloudDialogflowCxV3ListChangelogsResponse

The response message for Changelogs.ListChangelogs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changelogs** | [**List[GoogleCloudDialogflowCxV3Changelog]**](GoogleCloudDialogflowCxV3Changelog.md) | The list of changelogs. There will be a maximum number of items returned based on the page_size field in the request. The changelogs will be ordered by timestamp. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_list_changelogs_response import GoogleCloudDialogflowCxV3ListChangelogsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ListChangelogsResponse from a JSON string
google_cloud_dialogflow_cx_v3_list_changelogs_response_instance = GoogleCloudDialogflowCxV3ListChangelogsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ListChangelogsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_list_changelogs_response_dict = google_cloud_dialogflow_cx_v3_list_changelogs_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ListChangelogsResponse from a dict
google_cloud_dialogflow_cx_v3_list_changelogs_response_from_dict = GoogleCloudDialogflowCxV3ListChangelogsResponse.from_dict(google_cloud_dialogflow_cx_v3_list_changelogs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


