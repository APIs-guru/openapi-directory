# GoogleCloudDocumentaiV1DocumentPage

A page in a Document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocks** | [**List[GoogleCloudDocumentaiV1DocumentPageBlock]**](GoogleCloudDocumentaiV1DocumentPageBlock.md) | A list of visually detected text blocks on the page. A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation. | [optional] 
**detected_barcodes** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedBarcode]**](GoogleCloudDocumentaiV1DocumentPageDetectedBarcode.md) | A list of detected barcodes. | [optional] 
**detected_languages** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**dimension** | [**GoogleCloudDocumentaiV1DocumentPageDimension**](GoogleCloudDocumentaiV1DocumentPageDimension.md) |  | [optional] 
**form_fields** | [**List[GoogleCloudDocumentaiV1DocumentPageFormField]**](GoogleCloudDocumentaiV1DocumentPageFormField.md) | A list of visually detected form fields on the page. | [optional] 
**image** | [**GoogleCloudDocumentaiV1DocumentPageImage**](GoogleCloudDocumentaiV1DocumentPageImage.md) |  | [optional] 
**image_quality_scores** | [**GoogleCloudDocumentaiV1DocumentPageImageQualityScores**](GoogleCloudDocumentaiV1DocumentPageImageQualityScores.md) |  | [optional] 
**layout** | [**GoogleCloudDocumentaiV1DocumentPageLayout**](GoogleCloudDocumentaiV1DocumentPageLayout.md) |  | [optional] 
**lines** | [**List[GoogleCloudDocumentaiV1DocumentPageLine]**](GoogleCloudDocumentaiV1DocumentPageLine.md) | A list of visually detected text lines on the page. A collection of tokens that a human would perceive as a line. | [optional] 
**page_number** | **int** | 1-based index for current Page in a parent Document. Useful when a page is taken out of a Document for individual processing. | [optional] 
**paragraphs** | [**List[GoogleCloudDocumentaiV1DocumentPageParagraph]**](GoogleCloudDocumentaiV1DocumentPageParagraph.md) | A list of visually detected text paragraphs on the page. A collection of lines that a human would perceive as a paragraph. | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1DocumentProvenance**](GoogleCloudDocumentaiV1DocumentProvenance.md) |  | [optional] 
**symbols** | [**List[GoogleCloudDocumentaiV1DocumentPageSymbol]**](GoogleCloudDocumentaiV1DocumentPageSymbol.md) | A list of visually detected symbols on the page. | [optional] 
**tables** | [**List[GoogleCloudDocumentaiV1DocumentPageTable]**](GoogleCloudDocumentaiV1DocumentPageTable.md) | A list of visually detected tables on the page. | [optional] 
**tokens** | [**List[GoogleCloudDocumentaiV1DocumentPageToken]**](GoogleCloudDocumentaiV1DocumentPageToken.md) | A list of visually detected tokens on the page. | [optional] 
**transforms** | [**List[GoogleCloudDocumentaiV1DocumentPageMatrix]**](GoogleCloudDocumentaiV1DocumentPageMatrix.md) | Transformation matrices that were applied to the original document image to produce Page.image. | [optional] 
**visual_elements** | [**List[GoogleCloudDocumentaiV1DocumentPageVisualElement]**](GoogleCloudDocumentaiV1DocumentPageVisualElement.md) | A list of detected non-text visual elements e.g. checkbox, signature etc. on the page. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_page import GoogleCloudDocumentaiV1DocumentPage

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentPage from a JSON string
google_cloud_documentai_v1_document_page_instance = GoogleCloudDocumentaiV1DocumentPage.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentPage.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_page_dict = google_cloud_documentai_v1_document_page_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentPage from a dict
google_cloud_documentai_v1_document_page_from_dict = GoogleCloudDocumentaiV1DocumentPage.from_dict(google_cloud_documentai_v1_document_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


