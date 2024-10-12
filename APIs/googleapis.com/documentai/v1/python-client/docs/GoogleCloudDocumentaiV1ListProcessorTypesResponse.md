# GoogleCloudDocumentaiV1ListProcessorTypesResponse

Response message for the ListProcessorTypes method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Points to the next page, otherwise empty. | [optional] 
**processor_types** | [**List[GoogleCloudDocumentaiV1ProcessorType]**](GoogleCloudDocumentaiV1ProcessorType.md) | The processor types. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_list_processor_types_response import GoogleCloudDocumentaiV1ListProcessorTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1ListProcessorTypesResponse from a JSON string
google_cloud_documentai_v1_list_processor_types_response_instance = GoogleCloudDocumentaiV1ListProcessorTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1ListProcessorTypesResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1_list_processor_types_response_dict = google_cloud_documentai_v1_list_processor_types_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1ListProcessorTypesResponse from a dict
google_cloud_documentai_v1_list_processor_types_response_from_dict = GoogleCloudDocumentaiV1ListProcessorTypesResponse.from_dict(google_cloud_documentai_v1_list_processor_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


