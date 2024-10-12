# GooglePrivacyDlpV2InspectDataSourceDetails

The results of an inspect DataSource job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requested_options** | [**GooglePrivacyDlpV2RequestedOptions**](GooglePrivacyDlpV2RequestedOptions.md) |  | [optional] 
**result** | [**GooglePrivacyDlpV2Result**](GooglePrivacyDlpV2Result.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_inspect_data_source_details import GooglePrivacyDlpV2InspectDataSourceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2InspectDataSourceDetails from a JSON string
google_privacy_dlp_v2_inspect_data_source_details_instance = GooglePrivacyDlpV2InspectDataSourceDetails.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2InspectDataSourceDetails.to_json())

# convert the object into a dict
google_privacy_dlp_v2_inspect_data_source_details_dict = google_privacy_dlp_v2_inspect_data_source_details_instance.to_dict()
# create an instance of GooglePrivacyDlpV2InspectDataSourceDetails from a dict
google_privacy_dlp_v2_inspect_data_source_details_from_dict = GooglePrivacyDlpV2InspectDataSourceDetails.from_dict(google_privacy_dlp_v2_inspect_data_source_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


