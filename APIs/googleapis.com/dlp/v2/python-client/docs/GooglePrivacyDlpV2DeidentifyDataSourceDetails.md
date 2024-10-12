# GooglePrivacyDlpV2DeidentifyDataSourceDetails

The results of a Deidentify action from an inspect job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deidentify_stats** | [**GooglePrivacyDlpV2DeidentifyDataSourceStats**](GooglePrivacyDlpV2DeidentifyDataSourceStats.md) |  | [optional] 
**requested_options** | [**GooglePrivacyDlpV2RequestedDeidentifyOptions**](GooglePrivacyDlpV2RequestedDeidentifyOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_deidentify_data_source_details import GooglePrivacyDlpV2DeidentifyDataSourceDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2DeidentifyDataSourceDetails from a JSON string
google_privacy_dlp_v2_deidentify_data_source_details_instance = GooglePrivacyDlpV2DeidentifyDataSourceDetails.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2DeidentifyDataSourceDetails.to_json())

# convert the object into a dict
google_privacy_dlp_v2_deidentify_data_source_details_dict = google_privacy_dlp_v2_deidentify_data_source_details_instance.to_dict()
# create an instance of GooglePrivacyDlpV2DeidentifyDataSourceDetails from a dict
google_privacy_dlp_v2_deidentify_data_source_details_from_dict = GooglePrivacyDlpV2DeidentifyDataSourceDetails.from_dict(google_privacy_dlp_v2_deidentify_data_source_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


