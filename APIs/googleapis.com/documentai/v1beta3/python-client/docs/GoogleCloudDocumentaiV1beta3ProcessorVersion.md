# GoogleCloudDocumentaiV1beta3ProcessorVersion

A processor version is an implementation of a processor. Each processor can have multiple versions, pretrained by Google internally or uptrained by the customer. A processor can only have one default version at a time. Its document-processing behavior is defined by that version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The time the processor version was created. | [optional] 
**deprecation_info** | [**GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo**](GoogleCloudDocumentaiV1beta3ProcessorVersionDeprecationInfo.md) |  | [optional] 
**display_name** | **str** | The display name of the processor version. | [optional] 
**document_schema** | [**GoogleCloudDocumentaiV1beta3DocumentSchema**](GoogleCloudDocumentaiV1beta3DocumentSchema.md) |  | [optional] 
**google_managed** | **bool** | Output only. Denotes that this &#x60;ProcessorVersion&#x60; is managed by Google. | [optional] [readonly] 
**kms_key_name** | **str** | The KMS key name used for encryption. | [optional] 
**kms_key_version_name** | **str** | The KMS key version with which data is encrypted. | [optional] 
**latest_evaluation** | [**GoogleCloudDocumentaiV1beta3EvaluationReference**](GoogleCloudDocumentaiV1beta3EvaluationReference.md) |  | [optional] 
**model_type** | **str** | Output only. The model type of this processor version. | [optional] [readonly] 
**name** | **str** | The resource name of the processor version. Format: &#x60;projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processor_version}&#x60; | [optional] 
**state** | **str** | The state of the processor version. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_processor_version import GoogleCloudDocumentaiV1beta3ProcessorVersion

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ProcessorVersion from a JSON string
google_cloud_documentai_v1beta3_processor_version_instance = GoogleCloudDocumentaiV1beta3ProcessorVersion.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ProcessorVersion.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_processor_version_dict = google_cloud_documentai_v1beta3_processor_version_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ProcessorVersion from a dict
google_cloud_documentai_v1beta3_processor_version_from_dict = GoogleCloudDocumentaiV1beta3ProcessorVersion.from_dict(google_cloud_documentai_v1beta3_processor_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


