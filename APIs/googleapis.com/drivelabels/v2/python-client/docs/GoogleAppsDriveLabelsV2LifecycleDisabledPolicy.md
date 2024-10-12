# GoogleAppsDriveLabelsV2LifecycleDisabledPolicy

The policy that governs how to treat a disabled label, field, or selection choice in different contexts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hide_in_search** | **bool** | Whether to hide this disabled object in the search menu for Drive items. * When &#x60;false&#x60;, the object is generally shown in the UI as disabled but it appears in the search results when searching for Drive items. * When &#x60;true&#x60;, the object is generally hidden in the UI when searching for Drive items. | [optional] 
**show_in_apply** | **bool** | Whether to show this disabled object in the apply menu on Drive items. * When &#x60;true&#x60;, the object is generally shown in the UI as disabled and is unselectable. * When &#x60;false&#x60;, the object is generally hidden in the UI. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2_lifecycle_disabled_policy import GoogleAppsDriveLabelsV2LifecycleDisabledPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2LifecycleDisabledPolicy from a JSON string
google_apps_drive_labels_v2_lifecycle_disabled_policy_instance = GoogleAppsDriveLabelsV2LifecycleDisabledPolicy.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2LifecycleDisabledPolicy.to_json())

# convert the object into a dict
google_apps_drive_labels_v2_lifecycle_disabled_policy_dict = google_apps_drive_labels_v2_lifecycle_disabled_policy_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2LifecycleDisabledPolicy from a dict
google_apps_drive_labels_v2_lifecycle_disabled_policy_from_dict = GoogleAppsDriveLabelsV2LifecycleDisabledPolicy.from_dict(google_apps_drive_labels_v2_lifecycle_disabled_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


