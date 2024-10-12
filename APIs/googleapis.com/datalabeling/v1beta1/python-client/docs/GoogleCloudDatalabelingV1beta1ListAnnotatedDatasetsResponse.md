# GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse

Results of listing annotated datasets for a dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotated_datasets** | [**List[GoogleCloudDatalabelingV1beta1AnnotatedDataset]**](GoogleCloudDatalabelingV1beta1AnnotatedDataset.md) | The list of annotated datasets to return. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_list_annotated_datasets_response import GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse from a JSON string
google_cloud_datalabeling_v1beta1_list_annotated_datasets_response_instance = GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_list_annotated_datasets_response_dict = google_cloud_datalabeling_v1beta1_list_annotated_datasets_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse from a dict
google_cloud_datalabeling_v1beta1_list_annotated_datasets_response_from_dict = GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse.from_dict(google_cloud_datalabeling_v1beta1_list_annotated_datasets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


