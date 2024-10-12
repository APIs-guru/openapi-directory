# GoogleCloudApigeeV1ListApiDocsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GoogleCloudApigeeV1ApiDoc]**](GoogleCloudApigeeV1ApiDoc.md) | The catalog item resources. | [optional] 
**error_code** | **str** | Unique error code for the request, if any. | [optional] 
**message** | **str** | Description of the operation. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**request_id** | **str** | Unique ID of the request. | [optional] 
**status** | **str** | Status of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_api_docs_response import GoogleCloudApigeeV1ListApiDocsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListApiDocsResponse from a JSON string
google_cloud_apigee_v1_list_api_docs_response_instance = GoogleCloudApigeeV1ListApiDocsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListApiDocsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_api_docs_response_dict = google_cloud_apigee_v1_list_api_docs_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListApiDocsResponse from a dict
google_cloud_apigee_v1_list_api_docs_response_from_dict = GoogleCloudApigeeV1ListApiDocsResponse.from_dict(google_cloud_apigee_v1_list_api_docs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


