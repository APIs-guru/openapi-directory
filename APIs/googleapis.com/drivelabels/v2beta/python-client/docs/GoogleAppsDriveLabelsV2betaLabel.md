# GoogleAppsDriveLabelsV2betaLabel

A label defines a taxonomy that can be applied to Drive items in order to organize and search across items. Labels can be simple strings, or can contain fields that describe additional metadata that can be further used to organize and search Drive items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_capabilities** | [**GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities**](GoogleAppsDriveLabelsV2betaLabelAppliedCapabilities.md) |  | [optional] 
**applied_label_policy** | [**GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy**](GoogleAppsDriveLabelsV2betaLabelAppliedLabelPolicy.md) |  | [optional] 
**create_time** | **str** | Output only. The time this label was created. | [optional] [readonly] 
**creator** | [**GoogleAppsDriveLabelsV2betaUserInfo**](GoogleAppsDriveLabelsV2betaUserInfo.md) |  | [optional] 
**customer** | **str** | Output only. The customer this label belongs to. For example: \&quot;customers/123abc789.\&quot; | [optional] [readonly] 
**disable_time** | **str** | Output only. The time this label was disabled. This value has no meaning when the label is not disabled. | [optional] [readonly] 
**disabler** | [**GoogleAppsDriveLabelsV2betaUserInfo**](GoogleAppsDriveLabelsV2betaUserInfo.md) |  | [optional] 
**display_hints** | [**GoogleAppsDriveLabelsV2betaLabelDisplayHints**](GoogleAppsDriveLabelsV2betaLabelDisplayHints.md) |  | [optional] 
**fields** | [**List[GoogleAppsDriveLabelsV2betaField]**](GoogleAppsDriveLabelsV2betaField.md) | List of fields in descending priority order. | [optional] 
**id** | **str** | Output only. Globally unique identifier of this label. ID makes up part of the label &#x60;name&#x60;, but unlike &#x60;name&#x60;, ID is consistent between revisions. Matches the regex: &#x60;([a-zA-Z0-9])+&#x60; | [optional] [readonly] 
**label_type** | **str** | Required. The type of label. | [optional] 
**learn_more_uri** | **str** | Custom URL to present to users to allow them to learn more about this label and how it should be used. | [optional] 
**lifecycle** | [**GoogleAppsDriveLabelsV2betaLifecycle**](GoogleAppsDriveLabelsV2betaLifecycle.md) |  | [optional] 
**lock_status** | [**GoogleAppsDriveLabelsV2betaLockStatus**](GoogleAppsDriveLabelsV2betaLockStatus.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the label. Will be in the form of either: &#x60;labels/{id}&#x60; or &#x60;labels/{id}@{revision_id}&#x60; depending on the request. See &#x60;id&#x60; and &#x60;revision_id&#x60; below. | [optional] [readonly] 
**properties** | [**GoogleAppsDriveLabelsV2betaLabelProperties**](GoogleAppsDriveLabelsV2betaLabelProperties.md) |  | [optional] 
**publish_time** | **str** | Output only. The time this label was published. This value has no meaning when the label is not published. | [optional] [readonly] 
**publisher** | [**GoogleAppsDriveLabelsV2betaUserInfo**](GoogleAppsDriveLabelsV2betaUserInfo.md) |  | [optional] 
**revision_create_time** | **str** | Output only. The time this label revision was created. | [optional] [readonly] 
**revision_creator** | [**GoogleAppsDriveLabelsV2betaUserInfo**](GoogleAppsDriveLabelsV2betaUserInfo.md) |  | [optional] 
**revision_id** | **str** | Output only. Revision ID of the label. Revision ID might be part of the label &#x60;name&#x60; depending on the request issued. A new revision is created whenever revisioned properties of a label are changed. Matches the regex: &#x60;([a-zA-Z0-9])+&#x60; | [optional] [readonly] 
**schema_capabilities** | [**GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities**](GoogleAppsDriveLabelsV2betaLabelSchemaCapabilities.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_label import GoogleAppsDriveLabelsV2betaLabel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaLabel from a JSON string
google_apps_drive_labels_v2beta_label_instance = GoogleAppsDriveLabelsV2betaLabel.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaLabel.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_label_dict = google_apps_drive_labels_v2beta_label_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaLabel from a dict
google_apps_drive_labels_v2beta_label_from_dict = GoogleAppsDriveLabelsV2betaLabel.from_dict(google_apps_drive_labels_v2beta_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


