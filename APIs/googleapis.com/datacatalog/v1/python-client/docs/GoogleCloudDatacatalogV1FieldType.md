# GoogleCloudDatacatalogV1FieldType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enum_type** | [**GoogleCloudDatacatalogV1FieldTypeEnumType**](GoogleCloudDatacatalogV1FieldTypeEnumType.md) |  | [optional] 
**primitive_type** | **str** | Primitive types, such as string, boolean, etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_field_type import GoogleCloudDatacatalogV1FieldType

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1FieldType from a JSON string
google_cloud_datacatalog_v1_field_type_instance = GoogleCloudDatacatalogV1FieldType.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1FieldType.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_field_type_dict = google_cloud_datacatalog_v1_field_type_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1FieldType from a dict
google_cloud_datacatalog_v1_field_type_from_dict = GoogleCloudDatacatalogV1FieldType.from_dict(google_cloud_datacatalog_v1_field_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


