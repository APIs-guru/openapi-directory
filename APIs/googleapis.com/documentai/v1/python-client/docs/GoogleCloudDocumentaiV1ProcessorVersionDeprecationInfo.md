# GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo

Information about the upcoming deprecation of this processor version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deprecation_time** | **str** | The time at which this processor version will be deprecated. | [optional] 
**replacement_processor_version** | **str** | If set, the processor version that will be used as a replacement. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_processor_version_deprecation_info import GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo from a JSON string
google_cloud_documentai_v1_processor_version_deprecation_info_instance = GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo.to_json())

# convert the object into a dict
google_cloud_documentai_v1_processor_version_deprecation_info_dict = google_cloud_documentai_v1_processor_version_deprecation_info_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo from a dict
google_cloud_documentai_v1_processor_version_deprecation_info_from_dict = GoogleCloudDocumentaiV1ProcessorVersionDeprecationInfo.from_dict(google_cloud_documentai_v1_processor_version_deprecation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


