# GoogleCloudDatacatalogV1FieldTypeEnumType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | [**List[GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue]**](GoogleCloudDatacatalogV1FieldTypeEnumTypeEnumValue.md) | The set of allowed values for this enum. This set must not be empty and can include up to 100 allowed values. The display names of the values in this set must not be empty and must be case-insensitively unique within this set. The order of items in this set is preserved. This field can be used to create, remove, and reorder enum values. To rename enum values, use the &#x60;RenameTagTemplateFieldEnumValue&#x60; method. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_field_type_enum_type import GoogleCloudDatacatalogV1FieldTypeEnumType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1FieldTypeEnumType from a JSON string
google_cloud_datacatalog_v1_field_type_enum_type_instance = GoogleCloudDatacatalogV1FieldTypeEnumType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1FieldTypeEnumType.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_field_type_enum_type_dict = google_cloud_datacatalog_v1_field_type_enum_type_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1FieldTypeEnumType from a dict
google_cloud_datacatalog_v1_field_type_enum_type_from_dict = GoogleCloudDatacatalogV1FieldTypeEnumType.from_dict(google_cloud_datacatalog_v1_field_type_enum_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


