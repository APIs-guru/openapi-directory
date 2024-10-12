# GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities

The capabilities related to this label when editing the label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_delete** | **bool** | Whether the user can delete this label. The user must have permission and the label must be disabled. | [optional] 
**can_disable** | **bool** | Whether the user can disable this label. The user must have permission and this label must not already be disabled. | [optional] 
**can_enable** | **bool** | Whether the user can enable this label. The user must have permission and this label must be disabled. | [optional] 
**can_update** | **bool** | Whether the user can change this label. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_label_schema_capabilities import GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities from a JSON string
google_apps_drive_labels_v2beta_label_schema_capabilities_instance = GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_label_schema_capabilities_dict = google_apps_drive_labels_v2beta_label_schema_capabilities_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities from a dict
google_apps_drive_labels_v2beta_label_schema_capabilities_from_dict = GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities.from_dict(google_apps_drive_labels_v2beta_label_schema_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


