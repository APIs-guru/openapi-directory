# GoogleCloudDiscoveryengineV1betaListSchemasResponse

Response message for SchemaService.ListSchemas method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as ListSchemasRequest.page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**schemas** | [**List[GoogleCloudDiscoveryengineV1betaSchema]**](GoogleCloudDiscoveryengineV1betaSchema.md) | The Schemas. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1beta_list_schemas_response import GoogleCloudDiscoveryengineV1betaListSchemasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1betaListSchemasResponse from a JSON string
google_cloud_discoveryengine_v1beta_list_schemas_response_instance = GoogleCloudDiscoveryengineV1betaListSchemasResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1betaListSchemasResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1beta_list_schemas_response_dict = google_cloud_discoveryengine_v1beta_list_schemas_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1betaListSchemasResponse from a dict
google_cloud_discoveryengine_v1beta_list_schemas_response_from_dict = GoogleCloudDiscoveryengineV1betaListSchemasResponse.from_dict(google_cloud_discoveryengine_v1beta_list_schemas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


