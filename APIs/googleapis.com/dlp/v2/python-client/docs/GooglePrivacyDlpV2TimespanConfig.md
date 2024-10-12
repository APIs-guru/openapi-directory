# GooglePrivacyDlpV2TimespanConfig

Configuration of the timespan of the items to include in scanning. Currently only supported when inspecting Cloud Storage and BigQuery.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_auto_population_of_timespan_config** | **bool** | When the job is started by a JobTrigger we will automatically figure out a valid start_time to avoid scanning files that have not been modified since the last time the JobTrigger executed. This will be based on the time of the execution of the last run of the JobTrigger or the timespan end_time used in the last run of the JobTrigger. | [optional] 
**end_time** | **str** | Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied. | [optional] 
**start_time** | **str** | Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied. | [optional] 
**timestamp_field** | [**GooglePrivacyDlpV2FieldId**](GooglePrivacyDlpV2FieldId.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_privacy_dlp_v2_timespan_config import GooglePrivacyDlpV2TimespanConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePrivacyDlpV2TimespanConfig from a JSON string
google_privacy_dlp_v2_timespan_config_instance = GooglePrivacyDlpV2TimespanConfig.from_json(json)
# print the JSON string representation of the object
print(GooglePrivacyDlpV2TimespanConfig.to_json())

# convert the object into a dict
google_privacy_dlp_v2_timespan_config_dict = google_privacy_dlp_v2_timespan_config_instance.to_dict()
# create an instance of GooglePrivacyDlpV2TimespanConfig from a dict
google_privacy_dlp_v2_timespan_config_from_dict = GooglePrivacyDlpV2TimespanConfig.from_dict(google_privacy_dlp_v2_timespan_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


