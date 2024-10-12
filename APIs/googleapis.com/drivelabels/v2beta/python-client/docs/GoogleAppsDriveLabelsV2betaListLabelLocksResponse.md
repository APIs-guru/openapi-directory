# GoogleAppsDriveLabelsV2betaListLabelLocksResponse

The response to a ListLabelLocksRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label_locks** | [**List[GoogleAppsDriveLabelsV2betaLabelLock]**](GoogleAppsDriveLabelsV2betaLabelLock.md) | LabelLocks. | [optional] 
**next_page_token** | **str** | The token of the next page in the response. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_list_label_locks_response import GoogleAppsDriveLabelsV2betaListLabelLocksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaListLabelLocksResponse from a JSON string
google_apps_drive_labels_v2beta_list_label_locks_response_instance = GoogleAppsDriveLabelsV2betaListLabelLocksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaListLabelLocksResponse.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_list_label_locks_response_dict = google_apps_drive_labels_v2beta_list_label_locks_response_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaListLabelLocksResponse from a dict
google_apps_drive_labels_v2beta_list_label_locks_response_from_dict = GoogleAppsDriveLabelsV2betaListLabelLocksResponse.from_dict(google_apps_drive_labels_v2beta_list_label_locks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


