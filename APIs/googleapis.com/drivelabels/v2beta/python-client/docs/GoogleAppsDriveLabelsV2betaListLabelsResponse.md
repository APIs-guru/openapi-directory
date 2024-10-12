# GoogleAppsDriveLabelsV2betaListLabelsResponse

Response for listing Labels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | [**List[GoogleAppsDriveLabelsV2betaLabel]**](GoogleAppsDriveLabelsV2betaLabel.md) | Labels. | [optional] 
**next_page_token** | **str** | The token of the next page in the response. | [optional] 

## Example

```python
from openapi_client.models.google_apps_drive_labels_v2beta_list_labels_response import GoogleAppsDriveLabelsV2betaListLabelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsDriveLabelsV2betaListLabelsResponse from a JSON string
google_apps_drive_labels_v2beta_list_labels_response_instance = GoogleAppsDriveLabelsV2betaListLabelsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsDriveLabelsV2betaListLabelsResponse.to_json())

# convert the object into a dict
google_apps_drive_labels_v2beta_list_labels_response_dict = google_apps_drive_labels_v2beta_list_labels_response_instance.to_dict()
# create an instance of GoogleAppsDriveLabelsV2betaListLabelsResponse from a dict
google_apps_drive_labels_v2beta_list_labels_response_from_dict = GoogleAppsDriveLabelsV2betaListLabelsResponse.from_dict(google_apps_drive_labels_v2beta_list_labels_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


