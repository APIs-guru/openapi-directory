# GoogleCloudDocumentaiV1beta2DocumentPageToken

A detected token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detected_break** | [**GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak**](GoogleCloudDocumentaiV1beta2DocumentPageTokenDetectedBreak.md) |  | [optional] 
**detected_languages** | [**List[GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1beta2DocumentPageDetectedLanguage.md) | A list of detected languages together with confidence. | [optional] 
**layout** | [**GoogleCloudDocumentaiV1beta2DocumentPageLayout**](GoogleCloudDocumentaiV1beta2DocumentPageLayout.md) |  | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1beta2DocumentProvenance**](GoogleCloudDocumentaiV1beta2DocumentProvenance.md) |  | [optional] 
**style_info** | [**GoogleCloudDocumentaiV1beta2DocumentPageTokenStyleInfo**](GoogleCloudDocumentaiV1beta2DocumentPageTokenStyleInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_page_token import GoogleCloudDocumentaiV1beta2DocumentPageToken

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageToken from a JSON string
google_cloud_documentai_v1beta2_document_page_token_instance = GoogleCloudDocumentaiV1beta2DocumentPageToken.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentPageToken.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_page_token_dict = google_cloud_documentai_v1beta2_document_page_token_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentPageToken from a dict
google_cloud_documentai_v1beta2_document_page_token_from_dict = GoogleCloudDocumentaiV1beta2DocumentPageToken.from_dict(google_cloud_documentai_v1beta2_document_page_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


