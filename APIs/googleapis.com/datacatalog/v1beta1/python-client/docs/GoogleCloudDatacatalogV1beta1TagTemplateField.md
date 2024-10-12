# GoogleCloudDatacatalogV1beta1TagTemplateField

The template for an individual field within a tag template.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description for this field. Defaults to an empty string. | [optional] 
**display_name** | **str** | The display name for this field. Defaults to an empty string. | [optional] 
**is_required** | **bool** | Whether this is a required field. Defaults to false. | [optional] 
**name** | **str** | Output only. The resource name of the tag template field in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template}/fields/{field} Note that this TagTemplateField may not actually be stored in the location in this name. | [optional] [readonly] 
**order** | **int** | The order of this field with respect to other fields in this tag template. A higher value indicates a more important field. The value can be negative. Multiple fields can have the same order, and field orders within a tag do not have to be sequential. | [optional] 
**type** | [**GoogleCloudDatacatalogV1beta1FieldType**](GoogleCloudDatacatalogV1beta1FieldType.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_tag_template_field import GoogleCloudDatacatalogV1beta1TagTemplateField

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1TagTemplateField from a JSON string
google_cloud_datacatalog_v1beta1_tag_template_field_instance = GoogleCloudDatacatalogV1beta1TagTemplateField.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1TagTemplateField.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_tag_template_field_dict = google_cloud_datacatalog_v1beta1_tag_template_field_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1TagTemplateField from a dict
google_cloud_datacatalog_v1beta1_tag_template_field_from_dict = GoogleCloudDatacatalogV1beta1TagTemplateField.from_dict(google_cloud_datacatalog_v1beta1_tag_template_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


