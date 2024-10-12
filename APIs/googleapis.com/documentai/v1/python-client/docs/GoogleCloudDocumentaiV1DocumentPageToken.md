# GoogleCloudDocumentaiV1DocumentPageToken

A detected token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_break** | [**GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak**](GoogleCloudDocumentaiV1DocumentPageTokenDetectedBreak.md) |  | [optional] 
**detected_languages** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1DocumentPageLayout**](GoogleCloudDocumentaiV1DocumentPageLayout.md) |  | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1DocumentProvenance**](GoogleCloudDocumentaiV1DocumentProvenance.md) |  | [optional] 
**style_info** | [**GoogleCloudDocumentaiV1DocumentPageTokenStyleInfo**](GoogleCloudDocumentaiV1DocumentPageTokenStyleInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_page_token import GoogleCloudDocumentaiV1DocumentPageToken

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentPageToken from a JSON string
google_cloud_documentai_v1_document_page_token_instance = GoogleCloudDocumentaiV1DocumentPageToken.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentPageToken.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_page_token_dict = google_cloud_documentai_v1_document_page_token_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentPageToken from a dict
google_cloud_documentai_v1_document_page_token_from_dict = GoogleCloudDocumentaiV1DocumentPageToken.from_dict(google_cloud_documentai_v1_document_page_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


