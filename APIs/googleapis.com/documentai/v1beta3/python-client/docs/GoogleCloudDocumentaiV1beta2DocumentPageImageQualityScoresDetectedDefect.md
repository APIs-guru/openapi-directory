# GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect

Image Quality Defects

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Confidence of detected defect. Range &#x60;[0, 1]&#x60; where &#x60;1&#x60; indicates strong confidence that the defect exists. | [optional] 
**type** | **str** | Name of the defect type. Supported values are: - &#x60;quality/defect_blurry&#x60; - &#x60;quality/defect_noisy&#x60; - &#x60;quality/defect_dark&#x60; - &#x60;quality/defect_faint&#x60; - &#x60;quality/defect_text_too_small&#x60; - &#x60;quality/defect_document_cutoff&#x60; - &#x60;quality/defect_text_cutoff&#x60; - &#x60;quality/defect_glare&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_page_image_quality_scores_detected_defect import GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect from a JSON string
google_cloud_documentai_v1beta2_document_page_image_quality_scores_detected_defect_instance = GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_page_image_quality_scores_detected_defect_dict = google_cloud_documentai_v1beta2_document_page_image_quality_scores_detected_defect_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect from a dict
google_cloud_documentai_v1beta2_document_page_image_quality_scores_detected_defect_from_dict = GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect.from_dict(google_cloud_documentai_v1beta2_document_page_image_quality_scores_detected_defect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


