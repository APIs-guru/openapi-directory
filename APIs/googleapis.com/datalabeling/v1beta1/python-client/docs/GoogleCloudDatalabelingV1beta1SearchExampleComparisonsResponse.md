# GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse

Results of searching example comparisons.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_comparisons** | [**List[GoogleCloudDatalabelingV1beta1ExampleComparison]**](GoogleCloudDatalabelingV1beta1ExampleComparison.md) | A list of example comparisons matching the search criteria. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_search_example_comparisons_response import GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse from a JSON string
google_cloud_datalabeling_v1beta1_search_example_comparisons_response_instance = GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_search_example_comparisons_response_dict = google_cloud_datalabeling_v1beta1_search_example_comparisons_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse from a dict
google_cloud_datalabeling_v1beta1_search_example_comparisons_response_from_dict = GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse.from_dict(google_cloud_datalabeling_v1beta1_search_example_comparisons_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


