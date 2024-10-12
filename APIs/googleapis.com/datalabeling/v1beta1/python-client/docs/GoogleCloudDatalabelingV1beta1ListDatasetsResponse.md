# GoogleCloudDatalabelingV1beta1ListDatasetsResponse

Results of listing datasets within a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasets** | [**List[GoogleCloudDatalabelingV1beta1Dataset]**](GoogleCloudDatalabelingV1beta1Dataset.md) | The list of datasets to return. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_list_datasets_response import GoogleCloudDatalabelingV1beta1ListDatasetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ListDatasetsResponse from a JSON string
google_cloud_datalabeling_v1beta1_list_datasets_response_instance = GoogleCloudDatalabelingV1beta1ListDatasetsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ListDatasetsResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_list_datasets_response_dict = google_cloud_datalabeling_v1beta1_list_datasets_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ListDatasetsResponse from a dict
google_cloud_datalabeling_v1beta1_list_datasets_response_from_dict = GoogleCloudDatalabelingV1beta1ListDatasetsResponse.from_dict(google_cloud_datalabeling_v1beta1_list_datasets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


