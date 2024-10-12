# GoogleCloudDocumentaiV1FetchProcessorTypesResponse

Response message for the FetchProcessorTypes method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processor_types** | [**List[GoogleCloudDocumentaiV1ProcessorType]**](GoogleCloudDocumentaiV1ProcessorType.md) | The list of processor types. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_fetch_processor_types_response import GoogleCloudDocumentaiV1FetchProcessorTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1FetchProcessorTypesResponse from a JSON string
google_cloud_documentai_v1_fetch_processor_types_response_instance = GoogleCloudDocumentaiV1FetchProcessorTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1FetchProcessorTypesResponse.to_json())

# convert the object into a dict
google_cloud_documentai_v1_fetch_processor_types_response_dict = google_cloud_documentai_v1_fetch_processor_types_response_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1FetchProcessorTypesResponse from a dict
google_cloud_documentai_v1_fetch_processor_types_response_from_dict = GoogleCloudDocumentaiV1FetchProcessorTypesResponse.from_dict(google_cloud_documentai_v1_fetch_processor_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


