# GoogleCloudDataplexV1TriggerSchedule

The scan is scheduled to run periodically.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cron** | **str** | Required. Cron (https://en.wikipedia.org/wiki/Cron) schedule for running scans periodically.To explicitly set a timezone in the cron tab, apply a prefix in the cron tab: \&quot;CRON_TZ&#x3D;${IANA_TIME_ZONE}\&quot; or \&quot;TZ&#x3D;${IANA_TIME_ZONE}\&quot;. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database (wikipedia (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List)). For example, CRON_TZ&#x3D;America/New_York 1 * * * *, or TZ&#x3D;America/New_York 1 * * * *.This field is required for Schedule scans. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_trigger_schedule import GoogleCloudDataplexV1TriggerSchedule

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1TriggerSchedule from a JSON string
google_cloud_dataplex_v1_trigger_schedule_instance = GoogleCloudDataplexV1TriggerSchedule.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1TriggerSchedule.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_trigger_schedule_dict = google_cloud_dataplex_v1_trigger_schedule_instance.to_dict()
# create an instance of GoogleCloudDataplexV1TriggerSchedule from a dict
google_cloud_dataplex_v1_trigger_schedule_from_dict = GoogleCloudDataplexV1TriggerSchedule.from_dict(google_cloud_dataplex_v1_trigger_schedule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


