# GoogleCloudDiscoveryengineV1alphaListSchemasResponse

Response message for SchemaService.ListSchemas method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as ListSchemasRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**schemas** | [**List[GoogleCloudDiscoveryengineV1alphaSchema]**](GoogleCloudDiscoveryengineV1alphaSchema.md) | The Schemas. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_list_schemas_response import GoogleCloudDiscoveryengineV1alphaListSchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaListSchemasResponse from a JSON string
google_cloud_discoveryengine_v1alpha_list_schemas_response_instance = GoogleCloudDiscoveryengineV1alphaListSchemasResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaListSchemasResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_list_schemas_response_dict = google_cloud_discoveryengine_v1alpha_list_schemas_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaListSchemasResponse from a dict
google_cloud_discoveryengine_v1alpha_list_schemas_response_from_dict = GoogleCloudDiscoveryengineV1alphaListSchemasResponse.from_dict(google_cloud_discoveryengine_v1alpha_list_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


