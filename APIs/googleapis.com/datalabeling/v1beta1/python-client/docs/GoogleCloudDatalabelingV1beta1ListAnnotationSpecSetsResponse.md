# GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse

Results of listing annotation spec set under a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_spec_sets** | [**List[GoogleCloudDatalabelingV1beta1AnnotationSpecSet]**](GoogleCloudDatalabelingV1beta1AnnotationSpecSet.md) | The list of annotation spec sets. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_list_annotation_spec_sets_response import GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse from a JSON string
google_cloud_datalabeling_v1beta1_list_annotation_spec_sets_response_instance = GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_list_annotation_spec_sets_response_dict = google_cloud_datalabeling_v1beta1_list_annotation_spec_sets_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse from a dict
google_cloud_datalabeling_v1beta1_list_annotation_spec_sets_response_from_dict = GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse.from_dict(google_cloud_datalabeling_v1beta1_list_annotation_spec_sets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


