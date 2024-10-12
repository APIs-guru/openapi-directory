# GoogleCloudDocumentaiV1beta3OcrConfigHints

Hints for OCR Engine

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_hints** | **List[str]** | List of BCP-47 language codes to use for OCR. In most cases, not specifying it yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting hints is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_ocr_config_hints import GoogleCloudDocumentaiV1beta3OcrConfigHints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3OcrConfigHints from a JSON string
google_cloud_documentai_v1beta3_ocr_config_hints_instance = GoogleCloudDocumentaiV1beta3OcrConfigHints.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3OcrConfigHints.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_ocr_config_hints_dict = google_cloud_documentai_v1beta3_ocr_config_hints_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3OcrConfigHints from a dict
google_cloud_documentai_v1beta3_ocr_config_hints_from_dict = GoogleCloudDocumentaiV1beta3OcrConfigHints.from_dict(google_cloud_documentai_v1beta3_ocr_config_hints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


