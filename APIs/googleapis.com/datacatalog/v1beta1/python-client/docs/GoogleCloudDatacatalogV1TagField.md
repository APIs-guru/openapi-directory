# GoogleCloudDatacatalogV1TagField

Contains the value and additional information on a field within a Tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | The value of a tag field with a boolean type. | [optional] 
**display_name** | **str** | Output only. The display name of this field. | [optional] [readonly] 
**double_value** | **float** | The value of a tag field with a double type. | [optional] 
**enum_value** | [**GoogleCloudDatacatalogV1TagFieldEnumValue**](GoogleCloudDatacatalogV1TagFieldEnumValue.md) |  | [optional] 
**order** | **int** | Output only. The order of this field with respect to other fields in this tag. Can be set by Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag don&#39;t have to be sequential. | [optional] [readonly] 
**richtext_value** | **str** | The value of a tag field with a rich text type. The maximum length is 10 MiB as this value holds HTML descriptions including encoded images. The maximum length of the text without images is 100 KiB. | [optional] 
**string_value** | **str** | The value of a tag field with a string type. The maximum length is 2000 UTF-8 characters. | [optional] 
**timestamp_value** | **str** | The value of a tag field with a timestamp type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_tag_field import GoogleCloudDatacatalogV1TagField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1TagField from a JSON string
google_cloud_datacatalog_v1_tag_field_instance = GoogleCloudDatacatalogV1TagField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1TagField.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_tag_field_dict = google_cloud_datacatalog_v1_tag_field_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1TagField from a dict
google_cloud_datacatalog_v1_tag_field_from_dict = GoogleCloudDatacatalogV1TagField.from_dict(google_cloud_datacatalog_v1_tag_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


