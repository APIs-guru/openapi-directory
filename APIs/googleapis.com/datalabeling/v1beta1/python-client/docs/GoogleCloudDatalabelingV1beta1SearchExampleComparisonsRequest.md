# GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest

Request message of SearchExampleComparisons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_size** | **int** | Optional. Requested page size. Server may return fewer results than requested. Default value is 100. | [optional] 
**page_token** | **str** | Optional. A token identifying a page of results for the server to return. Typically obtained by the nextPageToken of the response to a previous search rquest. If you don&#39;t specify this field, the API call requests the first page of the search. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_search_example_comparisons_request import GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest from a JSON string
google_cloud_datalabeling_v1beta1_search_example_comparisons_request_instance = GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_search_example_comparisons_request_dict = google_cloud_datalabeling_v1beta1_search_example_comparisons_request_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest from a dict
google_cloud_datalabeling_v1beta1_search_example_comparisons_request_from_dict = GoogleCloudDatalabelingV1beta1SearchExampleComparisonsRequest.from_dict(google_cloud_datalabeling_v1beta1_search_example_comparisons_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


