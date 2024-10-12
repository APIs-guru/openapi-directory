# GoogleCloudDatacatalogV1beta1TagField

Contains the value and supporting information for a field within a Tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Holds the value for a tag field with boolean type. | [optional] 
**display_name** | **str** | Output only. The display name of this field. | [optional] [readonly] 
**double_value** | **float** | Holds the value for a tag field with double type. | [optional] 
**enum_value** | [**GoogleCloudDatacatalogV1beta1TagFieldEnumValue**](GoogleCloudDatacatalogV1beta1TagFieldEnumValue.md) |  | [optional] 
**order** | **int** | Output only. The order of this field with respect to other fields in this tag. It can be set in Tag. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential. | [optional] [readonly] 
**string_value** | **str** | Holds the value for a tag field with string type. | [optional] 
**timestamp_value** | **str** | Holds the value for a tag field with timestamp type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_tag_field import GoogleCloudDatacatalogV1beta1TagField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1TagField from a JSON string
google_cloud_datacatalog_v1beta1_tag_field_instance = GoogleCloudDatacatalogV1beta1TagField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1TagField.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_tag_field_dict = google_cloud_datacatalog_v1beta1_tag_field_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1TagField from a dict
google_cloud_datacatalog_v1beta1_tag_field_from_dict = GoogleCloudDatacatalogV1beta1TagField.from_dict(google_cloud_datacatalog_v1beta1_tag_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


