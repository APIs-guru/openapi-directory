# GoogleCloudAiplatformV1beta1ListEntityTypesResponse

Response message for FeaturestoreService.ListEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_types** | [**List[GoogleCloudAiplatformV1beta1EntityType]**](GoogleCloudAiplatformV1beta1EntityType.md) | The EntityTypes matching the request. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListEntityTypesRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_entity_types_response import GoogleCloudAiplatformV1beta1ListEntityTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListEntityTypesResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_entity_types_response_instance = GoogleCloudAiplatformV1beta1ListEntityTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListEntityTypesResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_entity_types_response_dict = google_cloud_aiplatform_v1beta1_list_entity_types_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListEntityTypesResponse from a dict
google_cloud_aiplatform_v1beta1_list_entity_types_response_from_dict = GoogleCloudAiplatformV1beta1ListEntityTypesResponse.from_dict(google_cloud_aiplatform_v1beta1_list_entity_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


