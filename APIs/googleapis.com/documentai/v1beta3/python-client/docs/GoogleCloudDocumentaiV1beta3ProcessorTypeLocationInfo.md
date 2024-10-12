# GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo

The location information about where the processor is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_id** | **str** | The location ID. For supported locations, refer to [regional and multi-regional support](/document-ai/docs/regions). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_processor_type_location_info import GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo from a JSON string
google_cloud_documentai_v1beta3_processor_type_location_info_instance = GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_processor_type_location_info_dict = google_cloud_documentai_v1beta3_processor_type_location_info_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo from a dict
google_cloud_documentai_v1beta3_processor_type_location_info_from_dict = GoogleCloudDocumentaiV1beta3ProcessorTypeLocationInfo.from_dict(google_cloud_documentai_v1beta3_processor_type_location_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


