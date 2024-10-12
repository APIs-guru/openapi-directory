# GoogleCloudDatacatalogV1TagTemplate

A tag template defines a tag that can have one or more typed fields. The template is used to create tags that are attached to Google Cloud resources. [Tag template roles] (https://cloud.google.com/iam/docs/understanding-roles#data-catalog-roles) provide permissions to create, edit, and use the template. For example, see the [TagTemplate User] (https://cloud.google.com/data-catalog/docs/how-to/template-user) role that includes a permission to use the tag template to tag resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name for this template. Defaults to an empty string. The name must contain only Unicode letters, numbers (0-9), underscores (_), dashes (-), spaces ( ), and can&#39;t start or end with spaces. The maximum length is 200 characters. | [optional] 
**fields** | [**Dict[str, GoogleCloudDatacatalogV1TagTemplateField]**](GoogleCloudDatacatalogV1TagTemplateField.md) | Required. Map of tag template field IDs to the settings for the field. This map is an exhaustive list of the allowed fields. The map must contain at least one field and at most 500 fields. The keys to this map are tag template field IDs. The IDs have the following limitations: * Can contain uppercase and lowercase letters, numbers (0-9) and underscores (_). * Must be at least 1 character and at most 64 characters long. * Must start with a letter or underscore. | [optional] 
**is_publicly_readable** | **bool** | Indicates whether tags created with this template are public. Public tags do not require tag template access to appear in ListTags API response. Additionally, you can search for a public tag by value with a simple search query in addition to using a &#x60;&#x60;tag:&#x60;&#x60; predicate. | [optional] 
**name** | **str** | The resource name of the tag template in URL format. Note: The tag template itself and its child resources might not be stored in the location specified in its name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_tag_template import GoogleCloudDatacatalogV1TagTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1TagTemplate from a JSON string
google_cloud_datacatalog_v1_tag_template_instance = GoogleCloudDatacatalogV1TagTemplate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1TagTemplate.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_tag_template_dict = google_cloud_datacatalog_v1_tag_template_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1TagTemplate from a dict
google_cloud_datacatalog_v1_tag_template_from_dict = GoogleCloudDatacatalogV1TagTemplate.from_dict(google_cloud_datacatalog_v1_tag_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


