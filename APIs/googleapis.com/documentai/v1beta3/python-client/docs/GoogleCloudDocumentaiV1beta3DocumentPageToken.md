# GoogleCloudDocumentaiV1beta3DocumentPageToken

A detected token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_break** | [**GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak**](GoogleCloudDocumentaiV1beta3DocumentPageTokenDetectedBreak.md) |  | [optional] 
**detected_languages** | [**List[GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1beta3DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1beta3DocumentPageLayout**](GoogleCloudDocumentaiV1beta3DocumentPageLayout.md) |  | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1beta3DocumentProvenance**](GoogleCloudDocumentaiV1beta3DocumentProvenance.md) |  | [optional] 
**style_info** | [**GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo**](GoogleCloudDocumentaiV1beta3DocumentPageTokenStyleInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_page_token import GoogleCloudDocumentaiV1beta3DocumentPageToken

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageToken from a JSON string
google_cloud_documentai_v1beta3_document_page_token_instance = GoogleCloudDocumentaiV1beta3DocumentPageToken.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentPageToken.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_page_token_dict = google_cloud_documentai_v1beta3_document_page_token_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentPageToken from a dict
google_cloud_documentai_v1beta3_document_page_token_from_dict = GoogleCloudDocumentaiV1beta3DocumentPageToken.from_dict(google_cloud_documentai_v1beta3_document_page_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


