# GoogleCloudDocumentaiV1beta3ProcessOptions

Options for Process API

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**from_end** | **int** | Only process certain pages from the end, same as above. | [optional] 
**from_start** | **int** | Only process certain pages from the start. Process all if the document has fewer pages. | [optional] 
**individual_page_selector** | [**GoogleCloudDocumentaiV1beta3ProcessOptionsIndividualPageSelector**](GoogleCloudDocumentaiV1beta3ProcessOptionsIndividualPageSelector.md) |  | [optional] 
**ocr_config** | [**GoogleCloudDocumentaiV1beta3OcrConfig**](GoogleCloudDocumentaiV1beta3OcrConfig.md) |  | [optional] 
**schema_override** | [**GoogleCloudDocumentaiV1beta3DocumentSchema**](GoogleCloudDocumentaiV1beta3DocumentSchema.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_process_options import GoogleCloudDocumentaiV1beta3ProcessOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3ProcessOptions from a JSON string
google_cloud_documentai_v1beta3_process_options_instance = GoogleCloudDocumentaiV1beta3ProcessOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3ProcessOptions.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_process_options_dict = google_cloud_documentai_v1beta3_process_options_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3ProcessOptions from a dict
google_cloud_documentai_v1beta3_process_options_from_dict = GoogleCloudDocumentaiV1beta3ProcessOptions.from_dict(google_cloud_documentai_v1beta3_process_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


