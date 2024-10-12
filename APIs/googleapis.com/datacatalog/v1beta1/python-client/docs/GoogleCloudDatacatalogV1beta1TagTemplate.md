# GoogleCloudDatacatalogV1beta1TagTemplate

A tag template defines a tag, which can have one or more typed fields. The template is used to create and attach the tag to Google Cloud resources. [Tag template roles](https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. See, for example, the [TagTemplate User](https://cloud.google.com/data-catalog/docs/how-to/template-user) role, which includes permission to use the tag template to tag resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name for this template. Defaults to an empty string. | [optional] 
**fields** | [**Dict[str, GoogleCloudDatacatalogV1beta1TagTemplateField]**](GoogleCloudDatacatalogV1beta1TagTemplateField.md) | Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. This map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. Field IDs can contain letters (both uppercase and lowercase), numbers (0-9) and underscores (_). Field IDs must be at least 1 character long and at most 64 characters long. Field IDs must start with a letter or underscore. | [optional] 
**name** | **str** | The resource name of the tag template in URL format. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} Note that this TagTemplate and its child resources may not actually be stored in the location in this name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_tag_template import GoogleCloudDatacatalogV1beta1TagTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1TagTemplate from a JSON string
google_cloud_datacatalog_v1beta1_tag_template_instance = GoogleCloudDatacatalogV1beta1TagTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1TagTemplate.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_tag_template_dict = google_cloud_datacatalog_v1beta1_tag_template_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1TagTemplate from a dict
google_cloud_datacatalog_v1beta1_tag_template_from_dict = GoogleCloudDatacatalogV1beta1TagTemplate.from_dict(google_cloud_datacatalog_v1beta1_tag_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


