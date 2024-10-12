# GoogleAppsDriveLabelsV2betaLabelProperties

Basic properties of the label.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the label. | [optional] 
**title** | **str** | Required. Title of the label. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_label_properties import GoogleAppsDriveLabelsV2betaLabelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaLabelProperties from a JSON string
google_apps_drive_labels_v2beta_label_properties_instance = GoogleAppsDriveLabelsV2betaLabelProperties.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaLabelProperties.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_label_properties_dict = google_apps_drive_labels_v2beta_label_properties_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaLabelProperties from a dict
google_apps_drive_labels_v2beta_label_properties_from_dict = GoogleAppsDriveLabelsV2betaLabelProperties.from_dict(google_apps_drive_labels_v2beta_label_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


