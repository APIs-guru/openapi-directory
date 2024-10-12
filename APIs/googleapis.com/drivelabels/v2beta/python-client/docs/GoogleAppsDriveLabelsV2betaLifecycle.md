# GoogleAppsDriveLabelsV2betaLifecycle

The lifecycle state of an object, such as label, field, or choice. The lifecycle enforces the following transitions: * `UNPUBLISHED_DRAFT` (starting state) * `UNPUBLISHED_DRAFT` -> `PUBLISHED` * `UNPUBLISHED_DRAFT` -> (Deleted) * `PUBLISHED` -> `DISABLED` * `DISABLED` -> `PUBLISHED` * `DISABLED` -> (Deleted) The published and disabled states have some distinct characteristics: * Published—Some kinds of changes might be made to an object in this state, in which case `has_unpublished_changes` will be true. Also, some kinds of changes are not permitted. Generally, any change that would invalidate or cause new restrictions on existing metadata related to the label are rejected. * Disabled—When disabled, the configured `DisabledPolicy` takes effect.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled_policy** | [**GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy**](GoogleAppsDriveLabelsV2betaLifecycleDisabledPolicy.md) |  | [optional] 
**has_unpublished_changes** | **bool** | Output only. Whether the object associated with this lifecycle has unpublished changes. | [optional] [readonly] 
**state** | **str** | Output only. The state of the object associated with this lifecycle. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_lifecycle import GoogleAppsDriveLabelsV2betaLifecycle

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaLifecycle from a JSON string
google_apps_drive_labels_v2beta_lifecycle_instance = GoogleAppsDriveLabelsV2betaLifecycle.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaLifecycle.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_lifecycle_dict = google_apps_drive_labels_v2beta_lifecycle_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaLifecycle from a dict
google_apps_drive_labels_v2beta_lifecycle_from_dict = GoogleAppsDriveLabelsV2betaLifecycle.from_dict(google_apps_drive_labels_v2beta_lifecycle_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


