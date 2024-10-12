# GoogleCloudApigeeV1ApiDocDocumentation

The documentation for a catalog item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**graphql_documentation** | [**GoogleCloudApigeeV1GraphqlDocumentation**](GoogleCloudApigeeV1GraphqlDocumentation.md) |  | [optional] 
**oas_documentation** | [**GoogleCloudApigeeV1OASDocumentation**](GoogleCloudApigeeV1OASDocumentation.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_doc_documentation import GoogleCloudApigeeV1ApiDocDocumentation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ApiDocDocumentation from a JSON string
google_cloud_apigee_v1_api_doc_documentation_instance = GoogleCloudApigeeV1ApiDocDocumentation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ApiDocDocumentation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_doc_documentation_dict = google_cloud_apigee_v1_api_doc_documentation_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ApiDocDocumentation from a dict
google_cloud_apigee_v1_api_doc_documentation_from_dict = GoogleCloudApigeeV1ApiDocDocumentation.from_dict(google_cloud_apigee_v1_api_doc_documentation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


