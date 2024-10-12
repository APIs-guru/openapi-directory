# GoogleCloudSecuritycenterV2LogEntry

An individual entry in a log.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_logging_entry** | [**GoogleCloudSecuritycenterV2CloudLoggingEntry**](GoogleCloudSecuritycenterV2CloudLoggingEntry.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_log_entry import GoogleCloudSecuritycenterV2LogEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2LogEntry from a JSON string
google_cloud_securitycenter_v2_log_entry_instance = GoogleCloudSecuritycenterV2LogEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2LogEntry.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_log_entry_dict = google_cloud_securitycenter_v2_log_entry_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2LogEntry from a dict
google_cloud_securitycenter_v2_log_entry_from_dict = GoogleCloudSecuritycenterV2LogEntry.from_dict(google_cloud_securitycenter_v2_log_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


