# GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue

Parsed and normalized entity value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_value** | [**GoogleTypePostalAddress**](GoogleTypePostalAddress.md) |  | [optional] 
**boolean_value** | **bool** | Boolean value. Can be used for entities with binary values, or for checkboxes. | [optional] 
**date_value** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**datetime_value** | [**GoogleTypeDateTime**](GoogleTypeDateTime.md) |  | [optional] 
**float_value** | **float** | Float value. | [optional] 
**integer_value** | **int** | Integer value. | [optional] 
**money_value** | [**GoogleTypeMoney**](GoogleTypeMoney.md) |  | [optional] 
**text** | **str** | Optional. An optional field to store a normalized string. For some entity types, one of respective &#x60;structured_value&#x60; fields may also be populated. Also not all the types of &#x60;structured_value&#x60; will be normalized. For example, some processors may not generate &#x60;float&#x60; or &#x60;integer&#x60; normalized text by default. Below are sample formats mapped to structured values. - Money/Currency type (&#x60;money_value&#x60;) is in the ISO 4217 text format. - Date type (&#x60;date_value&#x60;) is in the ISO 8601 text format. - Datetime type (&#x60;datetime_value&#x60;) is in the ISO 8601 text format. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_document_entity_normalized_value import GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue from a JSON string
google_cloud_documentai_v1beta3_document_entity_normalized_value_instance = GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_document_entity_normalized_value_dict = google_cloud_documentai_v1beta3_document_entity_normalized_value_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue from a dict
google_cloud_documentai_v1beta3_document_entity_normalized_value_from_dict = GoogleCloudDocumentaiV1beta3DocumentEntityNormalizedValue.from_dict(google_cloud_documentai_v1beta3_document_entity_normalized_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


