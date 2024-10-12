# GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse

Response message for the ListProcessorVersions method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Points to the next processor, otherwise empty. | [optional] 
**processor_versions** | [**List[GoogleCloudDocumentaiV1beta3ProcessorVersion]**](GoogleCloudDocumentaiV1beta3ProcessorVersion.md) | The list of processors. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_list_processor_versions_response import GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse from a JSON string
google_cloud_documentai_v1beta3_list_processor_versions_response_instance = GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_list_processor_versions_response_dict = google_cloud_documentai_v1beta3_list_processor_versions_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse from a dict
google_cloud_documentai_v1beta3_list_processor_versions_response_from_dict = GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse.from_dict(google_cloud_documentai_v1beta3_list_processor_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


