# GoogleCloudDocumentaiV1beta3DocumentPage

A page in a Document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocks** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageBlock]**](GoogleCloudDocumentaiV1beta3DocumentPageBlock.md) | A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation. | [optional] 
**detected_barcodes** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode]**](GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode.md) | A list of detected barcodes. | [optional] 
**detected_languages** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**dimension** | [**GoogleCloudDocumentaiV1beta3DocumentPageDimension**](GoogleCloudDocumentaiV1beta3DocumentPageDimension.md) |  | [optional] 
**form_fields** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageFormField]**](GoogleCloudDocumentaiV1beta3DocumentPageFormField.md) | A list of visually detected form fields on the page. | [optional] 
**image** | [**GoogleCloudDocumentaiV1beta3DocumentPageImage**](GoogleCloudDocumentaiV1beta3DocumentPageImage.md) |  | [optional] 
**image_quality_scores** | [**GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores**](GoogleCloudDocumentaiV1beta3DocumentPageImageQualityScores.md) |  | [optional] 
**layout** | [**GoogleCloudDocumentaiV1beta3DocumentPageLayout**](GoogleCloudDocumentaiV1beta3DocumentPageLayout.md) |  | [optional] 
**lines** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageLine]**](GoogleCloudDocumentaiV1beta3DocumentPageLine.md) | A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line. | [optional] 
**page_number** | **int** | 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing. | [optional] 
**paragraphs** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageParagraph]**](GoogleCloudDocumentaiV1beta3DocumentPageParagraph.md) | A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph. | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1beta3DocumentProvenance**](GoogleCloudDocumentaiV1beta3DocumentProvenance.md) |  | [optional] 
**symbols** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageSymbol]**](GoogleCloudDocumentaiV1beta3DocumentPageSymbol.md) | A list of visually detected symbols on the page. | [optional] 
**tables** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageTable]**](GoogleCloudDocumentaiV1beta3DocumentPageTable.md) | A list of visually detected tables on the page. | [optional] 
**tokens** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageToken]**](GoogleCloudDocumentaiV1beta3DocumentPageToken.md) | A list of visually detected tokens on the page. | [optional] 
**transforms** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageMatrix]**](GoogleCloudDocumentaiV1beta3DocumentPageMatrix.md) | Transformation matrices that were applied to the original document image to produce Page.image. | [optional] 
**visual_elements** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageVisualElement]**](GoogleCloudDocumentaiV1beta3DocumentPageVisualElement.md) | A list of detected non-text visual elements e.g. checkbox, signature etc. on the page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page import GoogleCloudDocumentaiV1beta3DocumentPage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPage from a JSON string
google_cloud_documentai_v1beta3_document_page_instance = GoogleCloudDocumentaiV1beta3DocumentPage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPage.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_dict = google_cloud_documentai_v1beta3_document_page_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPage from a dict
google_cloud_documentai_v1beta3_document_page_from_dict = GoogleCloudDocumentaiV1beta3DocumentPage.from_dict(google_cloud_documentai_v1beta3_document_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


