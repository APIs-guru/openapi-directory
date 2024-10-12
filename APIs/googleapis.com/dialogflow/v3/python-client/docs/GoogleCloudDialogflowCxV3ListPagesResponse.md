# GoogleCloudDialogflowCxV3ListPagesResponse

The response message for Pages.ListPages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**pages** | [**List[GoogleCloudDialogflowCxV3Page]**](GoogleCloudDialogflowCxV3Page.md) | The list of pages. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_list_pages_response import GoogleCloudDialogflowCxV3ListPagesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ListPagesResponse from a JSON string
google_cloud_dialogflow_cx_v3_list_pages_response_instance = GoogleCloudDialogflowCxV3ListPagesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ListPagesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_list_pages_response_dict = google_cloud_dialogflow_cx_v3_list_pages_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ListPagesResponse from a dict
google_cloud_dialogflow_cx_v3_list_pages_response_from_dict = GoogleCloudDialogflowCxV3ListPagesResponse.from_dict(google_cloud_dialogflow_cx_v3_list_pages_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


