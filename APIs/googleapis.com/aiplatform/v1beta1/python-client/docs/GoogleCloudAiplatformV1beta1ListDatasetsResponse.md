# GoogleCloudAiplatformV1beta1ListDatasetsResponse

Response message for DatasetService.ListDatasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasets** | [**List[GoogleCloudAiplatformV1beta1Dataset]**](GoogleCloudAiplatformV1beta1Dataset.md) | A list of Datasets that matches the specified filter in the request. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_datasets_response import GoogleCloudAiplatformV1beta1ListDatasetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListDatasetsResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_datasets_response_instance = GoogleCloudAiplatformV1beta1ListDatasetsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListDatasetsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_datasets_response_dict = google_cloud_aiplatform_v1beta1_list_datasets_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListDatasetsResponse from a dict
google_cloud_aiplatform_v1beta1_list_datasets_response_from_dict = GoogleCloudAiplatformV1beta1ListDatasetsResponse.from_dict(google_cloud_aiplatform_v1beta1_list_datasets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


