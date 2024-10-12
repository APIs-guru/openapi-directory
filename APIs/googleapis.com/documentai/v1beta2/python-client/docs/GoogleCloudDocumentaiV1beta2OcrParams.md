# GoogleCloudDocumentaiV1beta2OcrParams

Parameters to control Optical Character Recognition (OCR) behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_hints** | **List[str]** | List of languages to use for OCR. In most cases, an empty value yields the best results since it enables automatic language detection. For languages based on the Latin alphabet, setting &#x60;language_hints&#x60; is not needed. In rare cases, when the language of the text in the image is known, setting a hint will help get better results (although it will be a significant hindrance if the hint is wrong). Document processing returns an error if one or more of the specified languages is not one of the supported languages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_ocr_params import GoogleCloudDocumentaiV1beta2OcrParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2OcrParams from a JSON string
google_cloud_documentai_v1beta2_ocr_params_instance = GoogleCloudDocumentaiV1beta2OcrParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2OcrParams.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_ocr_params_dict = google_cloud_documentai_v1beta2_ocr_params_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2OcrParams from a dict
google_cloud_documentai_v1beta2_ocr_params_from_dict = GoogleCloudDocumentaiV1beta2OcrParams.from_dict(google_cloud_documentai_v1beta2_ocr_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


