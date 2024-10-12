# FieldMetadata

Specifies FHIR paths to match, and how to handle de-identification of matching fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Deidentify action for one field. | [optional] 
**paths** | **List[str]** | List of paths to FHIR fields to redact. Each path is a period-separated list where each component is either a field name or FHIR type name. All types begin with an upper case letter. For example, the resource field \&quot;Patient.Address.city\&quot;, which uses a string type, can be matched by \&quot;Patient.Address.String\&quot;. Path also supports partial matching. For example, \&quot;Patient.Address.city\&quot; can be matched by \&quot;Address.city\&quot; (Patient omitted). Partial matching and type matching can be combined. For example, \&quot;Patient.Address.city\&quot; can be matched by \&quot;Address.String\&quot;. For \&quot;choice\&quot; types (those defined in the FHIR spec with the form: field[x]), use two separate components. For example, \&quot;deceasedAge.unit\&quot; is matched by \&quot;Deceased.Age.unit\&quot;. Supported types are: AdministrativeGenderCode, Base64Binary, Boolean, Code, Date, DateTime, Decimal, HumanName, Id, Instant, Integer, LanguageCode, Markdown, Oid, PositiveInt, String, UnsignedInt, Uri, Uuid, Xhtml. The sub-type for HumanName(for example HumanName.given, HumanName.family) can be omitted. | [optional] 

## Example

```python
from openapi_client.models.field_metadata import FieldMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of FieldMetadata from a JSON string
field_metadata_instance = FieldMetadata.from_json(json)
# print the JSON string representation of the object
print(FieldMetadata.to_json())

# convert the object into a dict
field_metadata_dict = field_metadata_instance.to_dict()
# create an instance of FieldMetadata from a dict
field_metadata_from_dict = FieldMetadata.from_dict(field_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


