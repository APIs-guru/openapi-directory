# GoogleCloudAiplatformV1beta1SearchFeaturesResponse

Response message for FeaturestoreService.SearchFeatures.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**List[GoogleCloudAiplatformV1beta1Feature]**](GoogleCloudAiplatformV1beta1Feature.md) | The Features matching the request. Fields returned: * &#x60;name&#x60; * &#x60;description&#x60; * &#x60;labels&#x60; * &#x60;create_time&#x60; * &#x60;update_time&#x60; | [optional] 
**next_page_token** | **str** | A token, which can be sent as SearchFeaturesRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_search_features_response import GoogleCloudAiplatformV1beta1SearchFeaturesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1SearchFeaturesResponse from a JSON string
google_cloud_aiplatform_v1beta1_search_features_response_instance = GoogleCloudAiplatformV1beta1SearchFeaturesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1SearchFeaturesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_search_features_response_dict = google_cloud_aiplatform_v1beta1_search_features_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1SearchFeaturesResponse from a dict
google_cloud_aiplatform_v1beta1_search_features_response_from_dict = GoogleCloudAiplatformV1beta1SearchFeaturesResponse.from_dict(google_cloud_aiplatform_v1beta1_search_features_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


