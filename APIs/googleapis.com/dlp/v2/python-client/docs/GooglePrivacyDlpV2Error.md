# GooglePrivacyDlpV2Error

Details information about an error encountered during job execution or the results of an unsuccessful activation of the JobTrigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | [**GoogleRpcStatus**](GoogleRpcStatus.md) |  | [optional] 
**timestamps** | **List[str]** | The times the error occurred. List includes the oldest timestamp and the last 9 timestamps. | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_error import GooglePrivacyDlpV2Error

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2Error from a JSON string
google_privacy_dlp_v2_error_instance = GooglePrivacyDlpV2Error.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2Error.to_json())

# convert the object into a dict
google_privacy_dlp_v2_error_dict = google_privacy_dlp_v2_error_instance.to_dict()
# create an instance of GooglePrivacyDlpV2Error from a dict
google_privacy_dlp_v2_error_from_dict = GooglePrivacyDlpV2Error.from_dict(google_privacy_dlp_v2_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


