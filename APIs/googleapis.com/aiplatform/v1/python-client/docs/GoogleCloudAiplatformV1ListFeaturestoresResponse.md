# GoogleCloudAiplatformV1ListFeaturestoresResponse

Response message for FeaturestoreService.ListFeaturestores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**featurestores** | [**List[GoogleCloudAiplatformV1Featurestore]**](GoogleCloudAiplatformV1Featurestore.md) | The Featurestores matching the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListFeaturestoresRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_featurestores_response import GoogleCloudAiplatformV1ListFeaturestoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListFeaturestoresResponse from a JSON string
google_cloud_aiplatform_v1_list_featurestores_response_instance = GoogleCloudAiplatformV1ListFeaturestoresResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListFeaturestoresResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_featurestores_response_dict = google_cloud_aiplatform_v1_list_featurestores_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListFeaturestoresResponse from a dict
google_cloud_aiplatform_v1_list_featurestores_response_from_dict = GoogleCloudAiplatformV1ListFeaturestoresResponse.from_dict(google_cloud_aiplatform_v1_list_featurestores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


