# GoogleCloudAiplatformV1ListAnnotationsResponse

Response message for DatasetService.ListAnnotations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[GoogleCloudAiplatformV1Annotation]**](GoogleCloudAiplatformV1Annotation.md) | A list of Annotations that matches the specified filter in the request. | [optional] 
**next_page_token** | **str** | The standard List next-page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_annotations_response import GoogleCloudAiplatformV1ListAnnotationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListAnnotationsResponse from a JSON string
google_cloud_aiplatform_v1_list_annotations_response_instance = GoogleCloudAiplatformV1ListAnnotationsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListAnnotationsResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_annotations_response_dict = google_cloud_aiplatform_v1_list_annotations_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListAnnotationsResponse from a dict
google_cloud_aiplatform_v1_list_annotations_response_from_dict = GoogleCloudAiplatformV1ListAnnotationsResponse.from_dict(google_cloud_aiplatform_v1_list_annotations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


