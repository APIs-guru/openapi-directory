# GoogleCloudDocumentaiV1ProcessorType

A processor type is responsible for performing a certain document understanding task on a certain type of document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_creation** | **bool** | Whether the processor type allows creation. If true, users can create a processor of this processor type. Otherwise, users need to request access. | [optional] 
**available_locations** | [**List[GoogleCloudDocumentaiV1ProcessorTypeLocationInfo]**](GoogleCloudDocumentaiV1ProcessorTypeLocationInfo.md) | The locations in which this processor is available. | [optional] 
**category** | **str** | The processor category, used by UI to group processor types. | [optional] 
**launch_stage** | **str** | Launch stage of the processor type | [optional] 
**name** | **str** | The resource name of the processor type. Format: &#x60;projects/{project}/processorTypes/{processor_type}&#x60; | [optional] 
**sample_document_uris** | **List[str]** | A set of Cloud Storage URIs of sample documents for this processor. | [optional] 
**type** | **str** | The processor type, such as: &#x60;OCR_PROCESSOR&#x60;, &#x60;INVOICE_PROCESSOR&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_processor_type import GoogleCloudDocumentaiV1ProcessorType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1ProcessorType from a JSON string
google_cloud_documentai_v1_processor_type_instance = GoogleCloudDocumentaiV1ProcessorType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1ProcessorType.to_json())

# convert the object into a dict
google_cloud_documentai_v1_processor_type_dict = google_cloud_documentai_v1_processor_type_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1ProcessorType from a dict
google_cloud_documentai_v1_processor_type_from_dict = GoogleCloudDocumentaiV1ProcessorType.from_dict(google_cloud_documentai_v1_processor_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


