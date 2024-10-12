# GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities

The capabilities related to this field when editing the field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_delete** | **bool** | Whether the user can delete this field. The user must have permission and the field must be deprecated. | [optional] 
**can_disable** | **bool** | Whether the user can disable this field. The user must have permission and this field must not already be disabled. | [optional] 
**can_enable** | **bool** | Whether the user can enable this field. The user must have permission and this field must be disabled. | [optional] 
**can_update** | **bool** | Whether the user can change this field. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_field_schema_capabilities import GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities from a JSON string
google_apps_drive_labels_v2beta_field_schema_capabilities_instance = GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_field_schema_capabilities_dict = google_apps_drive_labels_v2beta_field_schema_capabilities_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities from a dict
google_apps_drive_labels_v2beta_field_schema_capabilities_from_dict = GoogleAppsDriveLabelsV2betaFieldSchemaCapabilities.from_dict(google_apps_drive_labels_v2beta_field_schema_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


