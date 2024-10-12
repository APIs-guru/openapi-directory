# GoogleCloudAiplatformV1beta1ListStudiesResponse

Response message for VizierService.ListStudies.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Passes this token as the &#x60;page_token&#x60; field of the request for a subsequent call. If this field is omitted, there are no subsequent pages. | [optional] 
**studies** | [**List[GoogleCloudAiplatformV1beta1Study]**](GoogleCloudAiplatformV1beta1Study.md) | The studies associated with the project. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_studies_response import GoogleCloudAiplatformV1beta1ListStudiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListStudiesResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_studies_response_instance = GoogleCloudAiplatformV1beta1ListStudiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListStudiesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_studies_response_dict = google_cloud_aiplatform_v1beta1_list_studies_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListStudiesResponse from a dict
google_cloud_aiplatform_v1beta1_list_studies_response_from_dict = GoogleCloudAiplatformV1beta1ListStudiesResponse.from_dict(google_cloud_aiplatform_v1beta1_list_studies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


