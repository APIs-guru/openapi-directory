# GoogleCloudDocumentaiV1beta1DocumentPageBlock

A block has a set of lines (collected into paragraphs) that have a common line-spacing and orientation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_languages** | [**List[GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1beta1DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1beta1DocumentPageLayout**](GoogleCloudDocumentaiV1beta1DocumentPageLayout.md) |  | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1beta1DocumentProvenance**](GoogleCloudDocumentaiV1beta1DocumentProvenance.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta1_document_page_block import GoogleCloudDocumentaiV1beta1DocumentPageBlock

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta1DocumentPageBlock from a JSON string
google_cloud_documentai_v1beta1_document_page_block_instance = GoogleCloudDocumentaiV1beta1DocumentPageBlock.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta1DocumentPageBlock.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta1_document_page_block_dict = google_cloud_documentai_v1beta1_document_page_block_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta1DocumentPageBlock from a dict
google_cloud_documentai_v1beta1_document_page_block_from_dict = GoogleCloudDocumentaiV1beta1DocumentPageBlock.from_dict(google_cloud_documentai_v1beta1_document_page_block_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


