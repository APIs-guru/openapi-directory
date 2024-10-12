# GoogleCloudDatacatalogV1beta1Tag

Tags are used to attach custom metadata to Data Catalog resources. Tags conform to the specifications within their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an individual column based on that schema. For attaching a tag to a nested column, use &#x60;.&#x60; to separate the column names. Example: * &#x60;outer_column.inner_column&#x60; | [optional] 
**fields** | [**Dict[str, GoogleCloudDatacatalogV1beta1TagField]**](GoogleCloudDatacatalogV1beta1TagField.md) | Required. This maps the ID of a tag field to the value of and additional information about that field. Valid field IDs are defined by the tag&#39;s template. A tag must have at least 1 field and at most 500 fields. | [optional] 
**name** | **str** | The resource name of the tag in URL format. Example: * projects/{project_id}/locations/{location}/entrygroups/{entry_group_id}/entries/{entry_id}/tags/{tag_id} where &#x60;tag_id&#x60; is a system-generated identifier. Note that this Tag may not actually be stored in the location in this name. | [optional] 
**template** | **str** | Required. The resource name of the tag template that this tag uses. Example: * projects/{project_id}/locations/{location}/tagTemplates/{tag_template_id} This field cannot be modified after creation. | [optional] 
**template_display_name** | **str** | Output only. The display name of the tag template. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_tag import GoogleCloudDatacatalogV1beta1Tag

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1Tag from a JSON string
google_cloud_datacatalog_v1beta1_tag_instance = GoogleCloudDatacatalogV1beta1Tag.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1Tag.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_tag_dict = google_cloud_datacatalog_v1beta1_tag_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1Tag from a dict
google_cloud_datacatalog_v1beta1_tag_from_dict = GoogleCloudDatacatalogV1beta1Tag.from_dict(google_cloud_datacatalog_v1beta1_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


