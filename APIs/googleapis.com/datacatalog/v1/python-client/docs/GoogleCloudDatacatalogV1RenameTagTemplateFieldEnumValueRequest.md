# GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest

Request message for RenameTagTemplateFieldEnumValue.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_enum_value_display_name** | **str** | Required. The new display name of the enum value. For example, &#x60;my_new_enum_value&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_rename_tag_template_field_enum_value_request import GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest from a JSON string
google_cloud_datacatalog_v1_rename_tag_template_field_enum_value_request_instance = GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_rename_tag_template_field_enum_value_request_dict = google_cloud_datacatalog_v1_rename_tag_template_field_enum_value_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest from a dict
google_cloud_datacatalog_v1_rename_tag_template_field_enum_value_request_from_dict = GoogleCloudDatacatalogV1RenameTagTemplateFieldEnumValueRequest.from_dict(google_cloud_datacatalog_v1_rename_tag_template_field_enum_value_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


