# GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores

Image quality scores for the page image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_defects** | [**List[GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect]**](GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScoresDetectedDefect.md) | A list of detected defects. | [optional] 
**quality_score** | **float** | The overall quality score. Range &#x60;[0, 1]&#x60; where &#x60;1&#x60; is perfect quality. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_page_image_quality_scores import GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores from a JSON string
google_cloud_documentai_v1beta2_document_page_image_quality_scores_instance = GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_page_image_quality_scores_dict = google_cloud_documentai_v1beta2_document_page_image_quality_scores_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores from a dict
google_cloud_documentai_v1beta2_document_page_image_quality_scores_from_dict = GoogleCloudDocumentaiV1beta2DocumentPageImageQualityScores.from_dict(google_cloud_documentai_v1beta2_document_page_image_quality_scores_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


