# GoogleAppsDriveLabelsV2FieldAppliedCapabilities

The capabilities related to this field on applied metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**can_read** | **bool** | Whether the user can read related applied metadata on items. | [optional] 
**can_search** | **bool** | Whether the user can search for Drive items referencing this field. | [optional] 
**can_write** | **bool** | Whether the user can set this field on Drive items. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_field_applied_capabilities import GoogleAppsDriveLabelsV2FieldAppliedCapabilities

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2FieldAppliedCapabilities from a JSON string
google_apps_drive_labels_v2_field_applied_capabilities_instance = GoogleAppsDriveLabelsV2FieldAppliedCapabilities.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2FieldAppliedCapabilities.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_field_applied_capabilities_dict = google_apps_drive_labels_v2_field_applied_capabilities_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2FieldAppliedCapabilities from a dict
google_apps_drive_labels_v2_field_applied_capabilities_from_dict = GoogleAppsDriveLabelsV2FieldAppliedCapabilities.from_dict(google_apps_drive_labels_v2_field_applied_capabilities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


