# GoogleCloudDocumentaiV1Processor

The first-class citizen for Document AI. Each processor defines how to extract structural information from a document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time the processor was created. | [optional] 
**default_processor_version** | **str** | The default processor version. | [optional] 
**display_name** | **str** | The display name of the processor. | [optional] 
**kms_key_name** | **str** | The [KMS key](https://cloud.google.com/security-key-management) used for encryption and decryption in CMEK scenarios. | [optional] 
**name** | **str** | Output only. Immutable. The resource name of the processor. Format: &#x60;projects/{project}/locations/{location}/processors/{processor}&#x60; | [optional] [readonly] 
**process_endpoint** | **str** | Output only. Immutable. The http endpoint that can be called to invoke processing. | [optional] [readonly] 
**processor_version_aliases** | [**List[GoogleCloudDocumentaiV1ProcessorVersionAlias]**](GoogleCloudDocumentaiV1ProcessorVersionAlias.md) | Output only. The processor version aliases. | [optional] [readonly] 
**state** | **str** | Output only. The state of the processor. | [optional] [readonly] 
**type** | **str** | The processor type, such as: &#x60;OCR_PROCESSOR&#x60;, &#x60;INVOICE_PROCESSOR&#x60;. To get a list of processor types, see FetchProcessorTypes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_processor import GoogleCloudDocumentaiV1Processor

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1Processor from a JSON string
google_cloud_documentai_v1_processor_instance = GoogleCloudDocumentaiV1Processor.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1Processor.to_json())

# convert the object into a dict
google_cloud_documentai_v1_processor_dict = google_cloud_documentai_v1_processor_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1Processor from a dict
google_cloud_documentai_v1_processor_from_dict = GoogleCloudDocumentaiV1Processor.from_dict(google_cloud_documentai_v1_processor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


