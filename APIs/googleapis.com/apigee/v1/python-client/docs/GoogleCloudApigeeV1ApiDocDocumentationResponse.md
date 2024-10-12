# GoogleCloudApigeeV1ApiDocDocumentationResponse

The catalog item documentation wrapped with response status, error_code, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GoogleCloudApigeeV1ApiDocDocumentation**](GoogleCloudApigeeV1ApiDocDocumentation.md) |  | [optional] 
**error_code** | **str** | Output only. Unique error code for the request, if any. | [optional] [readonly] 
**message** | **str** | Output only. Description of the operation. | [optional] [readonly] 
**request_id** | **str** | Output only. Unique ID of the request. | [optional] [readonly] 
**status** | **str** | Output only. Status of the operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_doc_documentation_response import GoogleCloudApigeeV1ApiDocDocumentationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ApiDocDocumentationResponse from a JSON string
google_cloud_apigee_v1_api_doc_documentation_response_instance = GoogleCloudApigeeV1ApiDocDocumentationResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ApiDocDocumentationResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_doc_documentation_response_dict = google_cloud_apigee_v1_api_doc_documentation_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ApiDocDocumentationResponse from a dict
google_cloud_apigee_v1_api_doc_documentation_response_from_dict = GoogleCloudApigeeV1ApiDocDocumentationResponse.from_dict(google_cloud_apigee_v1_api_doc_documentation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


