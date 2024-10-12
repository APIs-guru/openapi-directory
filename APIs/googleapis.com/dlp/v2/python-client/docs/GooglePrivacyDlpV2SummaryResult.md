# GooglePrivacyDlpV2SummaryResult

A collection that informs the user the number of times a particular `TransformationResultCode` and error details occurred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Outcome of the transformation. | [optional] 
**count** | **str** | Number of transformations counted by this result. | [optional] 
**details** | **str** | A place for warnings or errors to show up if a transformation didn&#39;t work as expected. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_summary_result import GooglePrivacyDlpV2SummaryResult

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2SummaryResult from a JSON string
google_privacy_dlp_v2_summary_result_instance = GooglePrivacyDlpV2SummaryResult.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2SummaryResult.to_json())

# convert the object into a dict
google_privacy_dlp_v2_summary_result_dict = google_privacy_dlp_v2_summary_result_instance.to_dict()
# create an instance of GooglePrivacyDlpV2SummaryResult from a dict
google_privacy_dlp_v2_summary_result_from_dict = GooglePrivacyDlpV2SummaryResult.from_dict(google_privacy_dlp_v2_summary_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


