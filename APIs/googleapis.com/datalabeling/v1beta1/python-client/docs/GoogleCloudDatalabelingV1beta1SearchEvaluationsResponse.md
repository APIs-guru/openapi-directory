# GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse

Results of searching evaluations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**evaluations** | [**List[GoogleCloudDatalabelingV1beta1Evaluation]**](GoogleCloudDatalabelingV1beta1Evaluation.md) | The list of evaluations matching the search. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_search_evaluations_response import GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse from a JSON string
google_cloud_datalabeling_v1beta1_search_evaluations_response_instance = GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_search_evaluations_response_dict = google_cloud_datalabeling_v1beta1_search_evaluations_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse from a dict
google_cloud_datalabeling_v1beta1_search_evaluations_response_from_dict = GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse.from_dict(google_cloud_datalabeling_v1beta1_search_evaluations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


