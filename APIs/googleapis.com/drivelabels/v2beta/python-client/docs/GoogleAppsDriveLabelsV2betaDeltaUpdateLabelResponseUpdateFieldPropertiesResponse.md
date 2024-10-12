# GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse

Response following update to Field properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **int** | The priority of the updated field. The priority may change from what was specified to assure contiguous priorities between fields (1-n). | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_delta_update_label_response_update_field_properties_response import GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse from a JSON string
google_apps_drive_labels_v2beta_delta_update_label_response_update_field_properties_response_instance = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_delta_update_label_response_update_field_properties_response_dict = google_apps_drive_labels_v2beta_delta_update_label_response_update_field_properties_response_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse from a dict
google_apps_drive_labels_v2beta_delta_update_label_response_update_field_properties_response_from_dict = GoogleAppsDriveLabelsV2betaDeltaUpdateLabelResponseUpdateFieldPropertiesResponse.from_dict(google_apps_drive_labels_v2beta_delta_update_label_response_update_field_properties_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


