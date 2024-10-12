# GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata

Specifies the FHIR paths to match and how to handle the de-identification of matching fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_mask_field** | **object** | Replace field value with masking character. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml. | [optional] 
**clean_text_field** | **object** | Inspect text and transform sensitive text. Configure using TextConfig. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Date, DateTime, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml. | [optional] 
**crypto_hash_field** | **object** | Replace field value with a hash of that value. Supported [types](https://www.hl7.org/fhir/datatypes.html): Code, Decimal, HumanName, Id, LanguageCode, Markdown, Oid, String, Uri, Uuid, Xhtml. | [optional] 
**date_shift_field** | **object** | Shift the date by a randomized number of days. See [date shifting](https://cloud.google.com/dlp/docs/concepts-date-shifting) for more information. Supported [types](https://www.hl7.org/fhir/datatypes.html): Date, DateTime. | [optional] 
**keep_field** | **object** | Keep field unchanged. | [optional] 
**paths** | **List[str]** | List of paths to FHIR fields to redact. Each path is a period-separated list where each component is either a field name or FHIR [type](https://www.hl7.org/fhir/datatypes.html) name. All types begin with an upper case letter. For example, the resource field &#x60;Patient.Address.city&#x60;, which uses a [string](https://www.hl7.org/fhir/datatypes-definitions.html#Address.city) type, can be matched by &#x60;Patient.Address.String&#x60;. Partial matching is supported. For example, &#x60;Patient.Address.city&#x60; can be matched by &#x60;Address.city&#x60; (with &#x60;Patient&#x60; omitted). Partial matching and type matching can be combined, for example &#x60;Patient.Address.city&#x60; can be matched by &#x60;Address.String&#x60;. For \&quot;choice\&quot; types (those defined in the FHIR spec with the format &#x60;field[x]&#x60;), use two separate components. For example, &#x60;deceasedAge.unit&#x60; is matched by &#x60;Deceased.Age.unit&#x60;. The following types are supported: AdministrativeGenderCode, Base64Binary, Boolean, Code, Date, DateTime, Decimal, HumanName, Id, Instant, Integer, LanguageCode, Markdown, Oid, PositiveInt, String, UnsignedInt, Uri, Uuid, Xhtml. The sub-type for HumanName (for example &#x60;HumanName.given&#x60;, &#x60;HumanName.family&#x60;) can be omitted. | [optional] 
**remove_field** | **object** | Remove field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_healthcare_v1beta1_deidentify_field_metadata import GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata from a JSON string
google_cloud_healthcare_v1beta1_deidentify_field_metadata_instance = GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.to_json())

# convert the object into a dict
google_cloud_healthcare_v1beta1_deidentify_field_metadata_dict = google_cloud_healthcare_v1beta1_deidentify_field_metadata_instance.to_dict()
# create an instance of GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata from a dict
google_cloud_healthcare_v1beta1_deidentify_field_metadata_from_dict = GoogleCloudHealthcareV1beta1DeidentifyFieldMetadata.from_dict(google_cloud_healthcare_v1beta1_deidentify_field_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


