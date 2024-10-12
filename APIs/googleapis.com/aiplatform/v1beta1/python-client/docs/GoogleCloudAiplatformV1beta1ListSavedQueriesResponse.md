# GoogleCloudAiplatformV1beta1ListSavedQueriesResponse

Response message for DatasetService.ListSavedQueries.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The standard List next-page token. | [optional] 
**saved_queries** | [**List[GoogleCloudAiplatformV1beta1SavedQuery]**](GoogleCloudAiplatformV1beta1SavedQuery.md) | A list of SavedQueries that match the specified filter in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_saved_queries_response import GoogleCloudAiplatformV1beta1ListSavedQueriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListSavedQueriesResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_saved_queries_response_instance = GoogleCloudAiplatformV1beta1ListSavedQueriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListSavedQueriesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_saved_queries_response_dict = google_cloud_aiplatform_v1beta1_list_saved_queries_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListSavedQueriesResponse from a dict
google_cloud_aiplatform_v1beta1_list_saved_queries_response_from_dict = GoogleCloudAiplatformV1beta1ListSavedQueriesResponse.from_dict(google_cloud_aiplatform_v1beta1_list_saved_queries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


