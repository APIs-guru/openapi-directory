# GoogleCloudDocumentaiV1DocumentPageFormField

A form field detected on the page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**corrected_key_text** | **str** | Created for Labeling UI to export key text. If corrections were made to the text identified by the &#x60;field_name.text_anchor&#x60;, this field will contain the correction. | [optional] 
**corrected_value_text** | **str** | Created for Labeling UI to export value text. If corrections were made to the text identified by the &#x60;field_value.text_anchor&#x60;, this field will contain the correction. | [optional] 
**field_name** | [**GoogleCloudDocumentaiV1DocumentPageLayout**](GoogleCloudDocumentaiV1DocumentPageLayout.md) |  | [optional] 
**field_value** | [**GoogleCloudDocumentaiV1DocumentPageLayout**](GoogleCloudDocumentaiV1DocumentPageLayout.md) |  | [optional] 
**name_detected_languages** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1DocumentPageDetectedLanguage.md) | A list of detected languages for name together with confidence. | [optional] 
**provenance** | [**GoogleCloudDocumentaiV1DocumentProvenance**](GoogleCloudDocumentaiV1DocumentProvenance.md) |  | [optional] 
**value_detected_languages** | [**List[GoogleCloudDocumentaiV1DocumentPageDetectedLanguage]**](GoogleCloudDocumentaiV1DocumentPageDetectedLanguage.md) | A list of detected languages for value together with confidence. | [optional] 
**value_type** | **str** | If the value is non-textual, this field represents the type. Current valid values are: - blank (this indicates the &#x60;field_value&#x60; is normal text) - &#x60;unfilled_checkbox&#x60; - &#x60;filled_checkbox&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_page_form_field import GoogleCloudDocumentaiV1DocumentPageFormField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentPageFormField from a JSON string
google_cloud_documentai_v1_document_page_form_field_instance = GoogleCloudDocumentaiV1DocumentPageFormField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentPageFormField.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_page_form_field_dict = google_cloud_documentai_v1_document_page_form_field_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentPageFormField from a dict
google_cloud_documentai_v1_document_page_form_field_from_dict = GoogleCloudDocumentaiV1DocumentPageFormField.from_dict(google_cloud_documentai_v1_document_page_form_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


