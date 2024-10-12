# GoogleCloudDatacatalogV1TagTemplateField

The template for an individual field within a tag template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description for this field. Defaults to an empty string. | [optional] 
**display_name** | **str** | The display name for this field. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can&#39;t start or end with spaces. The maximum length is 200 characters. | [optional] 
**is_required** | **bool** | If true, this field is required. Defaults to false. | [optional] 
**name** | **str** | Output only. The resource name of the tag template field in URL format. Example: &#x60;projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE}/fields/{FIELD}&#x60; Note: The tag template field itself might not be stored in the location specified in its name. The name must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_), and must start with a letter or underscore. The maximum length is 64 characters. | [optional] [readonly] 
**order** | **int** | The order of this field with respect to other fields in this tag template. For example, a higher value can indicate a more important field. The value can be negative. Multiple fields can have the same order and field orders within a tag don&#39;t have to be sequential. | [optional] 
**type** | [**GoogleCloudDatacatalogV1FieldType**](GoogleCloudDatacatalogV1FieldType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_tag_template_field import GoogleCloudDatacatalogV1TagTemplateField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1TagTemplateField from a JSON string
google_cloud_datacatalog_v1_tag_template_field_instance = GoogleCloudDatacatalogV1TagTemplateField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1TagTemplateField.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_tag_template_field_dict = google_cloud_datacatalog_v1_tag_template_field_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1TagTemplateField from a dict
google_cloud_datacatalog_v1_tag_template_field_from_dict = GoogleCloudDatacatalogV1TagTemplateField.from_dict(google_cloud_datacatalog_v1_tag_template_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


