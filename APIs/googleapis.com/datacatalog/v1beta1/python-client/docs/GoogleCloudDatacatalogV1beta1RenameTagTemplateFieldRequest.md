# GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest

Request message for RenameTagTemplateField.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_tag_template_field_id** | **str** | Required. The new ID of this tag template field. For example, &#x60;my_new_field&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_rename_tag_template_field_request import GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest from a JSON string
google_cloud_datacatalog_v1beta1_rename_tag_template_field_request_instance = GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_rename_tag_template_field_request_dict = google_cloud_datacatalog_v1beta1_rename_tag_template_field_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest from a dict
google_cloud_datacatalog_v1beta1_rename_tag_template_field_request_from_dict = GoogleCloudDatacatalogV1beta1RenameTagTemplateFieldRequest.from_dict(google_cloud_datacatalog_v1beta1_rename_tag_template_field_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


