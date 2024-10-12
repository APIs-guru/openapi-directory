# GoogleCloudApigeeV1GraphqlDocumentation

GraphQL documentation for a catalog item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_uri** | **str** | Required. The GraphQL endpoint URI to be queried by API consumers. Max length is 2,083 characters. | [optional] 
**var_schema** | [**GoogleCloudApigeeV1DocumentationFile**](GoogleCloudApigeeV1DocumentationFile.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_graphql_documentation import GoogleCloudApigeeV1GraphqlDocumentation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1GraphqlDocumentation from a JSON string
google_cloud_apigee_v1_graphql_documentation_instance = GoogleCloudApigeeV1GraphqlDocumentation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1GraphqlDocumentation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_graphql_documentation_dict = google_cloud_apigee_v1_graphql_documentation_instance.to_dict()
# create an instance of GoogleCloudApigeeV1GraphqlDocumentation from a dict
google_cloud_apigee_v1_graphql_documentation_from_dict = GoogleCloudApigeeV1GraphqlDocumentation.from_dict(google_cloud_apigee_v1_graphql_documentation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


