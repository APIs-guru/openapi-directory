# GoogleCloudDatacatalogV1Tag

Tags contain custom metadata and are attached to Data Catalog resources. Tags conform with the specification of their tag template. See [Data Catalog IAM](https://cloud.google.com/data-catalog/docs/concepts/iam) for information on the permissions needed to create or view tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column** | **str** | Resources like entry can have schemas associated with them. This scope allows you to attach tags to an individual column based on that schema. To attach a tag to a nested column, separate column names with a dot (&#x60;.&#x60;). Example: &#x60;column.nested_column&#x60;. | [optional] 
**fields** | [**Dict[str, GoogleCloudDatacatalogV1TagField]**](GoogleCloudDatacatalogV1TagField.md) | Required. Maps the ID of a tag field to its value and additional information about that field. Tag template defines valid field IDs. A tag must have at least 1 field and at most 500 fields. | [optional] 
**name** | **str** | The resource name of the tag in URL format where tag ID is a system-generated identifier. Note: The tag itself might not be stored in the location specified in its name. | [optional] 
**template** | **str** | Required. The resource name of the tag template this tag uses. Example: &#x60;projects/{PROJECT_ID}/locations/{LOCATION}/tagTemplates/{TAG_TEMPLATE_ID}&#x60; This field cannot be modified after creation. | [optional] 
**template_display_name** | **str** | Output only. The display name of the tag template. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_tag import GoogleCloudDatacatalogV1Tag

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1Tag from a JSON string
google_cloud_datacatalog_v1_tag_instance = GoogleCloudDatacatalogV1Tag.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1Tag.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_tag_dict = google_cloud_datacatalog_v1_tag_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1Tag from a dict
google_cloud_datacatalog_v1_tag_from_dict = GoogleCloudDatacatalogV1Tag.from_dict(google_cloud_datacatalog_v1_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


