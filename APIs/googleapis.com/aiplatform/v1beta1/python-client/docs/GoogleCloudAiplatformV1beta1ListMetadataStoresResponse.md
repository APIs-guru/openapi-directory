# GoogleCloudAiplatformV1beta1ListMetadataStoresResponse

Response message for MetadataService.ListMetadataStores.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_stores** | [**List[GoogleCloudAiplatformV1beta1MetadataStore]**](GoogleCloudAiplatformV1beta1MetadataStore.md) | The MetadataStores found for the Location. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListMetadataStoresRequest.page_token to retrieve the next page. If this field is not populated, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_list_metadata_stores_response import GoogleCloudAiplatformV1beta1ListMetadataStoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1ListMetadataStoresResponse from a JSON string
google_cloud_aiplatform_v1beta1_list_metadata_stores_response_instance = GoogleCloudAiplatformV1beta1ListMetadataStoresResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1ListMetadataStoresResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_list_metadata_stores_response_dict = google_cloud_aiplatform_v1beta1_list_metadata_stores_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1ListMetadataStoresResponse from a dict
google_cloud_aiplatform_v1beta1_list_metadata_stores_response_from_dict = GoogleCloudAiplatformV1beta1ListMetadataStoresResponse.from_dict(google_cloud_aiplatform_v1beta1_list_metadata_stores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


