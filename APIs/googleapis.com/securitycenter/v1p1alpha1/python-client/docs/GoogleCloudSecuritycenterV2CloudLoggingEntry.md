# GoogleCloudSecuritycenterV2CloudLoggingEntry

Metadata taken from a [Cloud Logging LogEntry](https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**insert_id** | **str** | A unique identifier for the log entry. | [optional] 
**log_id** | **str** | The type of the log (part of &#x60;log_name&#x60;. &#x60;log_name&#x60; is the resource name of the log to which this log entry belongs). For example: &#x60;cloudresourcemanager.googleapis.com/activity&#x60; Note that this field is not URL-encoded, unlike in &#x60;LogEntry&#x60;. | [optional] 
**resource_container** | **str** | The organization, folder, or project of the monitored resource that produced this log entry. | [optional] 
**timestamp** | **str** | The time the event described by the log entry occurred. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_securitycenter_v2_cloud_logging_entry import GoogleCloudSecuritycenterV2CloudLoggingEntry

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudSecuritycenterV2CloudLoggingEntry from a JSON string
google_cloud_securitycenter_v2_cloud_logging_entry_instance = GoogleCloudSecuritycenterV2CloudLoggingEntry.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudSecuritycenterV2CloudLoggingEntry.to_json())

# convert the object into a dict
google_cloud_securitycenter_v2_cloud_logging_entry_dict = google_cloud_securitycenter_v2_cloud_logging_entry_instance.to_dict()
# create an instance of GoogleCloudSecuritycenterV2CloudLoggingEntry from a dict
google_cloud_securitycenter_v2_cloud_logging_entry_from_dict = GoogleCloudSecuritycenterV2CloudLoggingEntry.from_dict(google_cloud_securitycenter_v2_cloud_logging_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


