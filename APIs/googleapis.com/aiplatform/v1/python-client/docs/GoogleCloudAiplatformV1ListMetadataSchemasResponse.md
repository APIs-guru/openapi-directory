# GoogleCloudAiplatformV1ListMetadataSchemasResponse

Response message for MetadataService.ListMetadataSchemas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_schemas** | [**List[GoogleCloudAiplatformV1MetadataSchema]**](GoogleCloudAiplatformV1MetadataSchema.md) | The MetadataSchemas found for the MetadataStore. | [optional] 
**next_page_token** | **str** | A token, which can be sent as ListMetadataSchemasRequest.page_token to retrieve the next page. If this field is not populated, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1_list_metadata_schemas_response import GoogleCloudAiplatformV1ListMetadataSchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1ListMetadataSchemasResponse from a JSON string
google_cloud_aiplatform_v1_list_metadata_schemas_response_instance = GoogleCloudAiplatformV1ListMetadataSchemasResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1ListMetadataSchemasResponse.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1_list_metadata_schemas_response_dict = google_cloud_aiplatform_v1_list_metadata_schemas_response_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1ListMetadataSchemasResponse from a dict
google_cloud_aiplatform_v1_list_metadata_schemas_response_from_dict = GoogleCloudAiplatformV1ListMetadataSchemasResponse.from_dict(google_cloud_aiplatform_v1_list_metadata_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


