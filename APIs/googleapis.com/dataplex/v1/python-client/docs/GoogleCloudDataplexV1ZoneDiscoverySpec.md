# GoogleCloudDataplexV1ZoneDiscoverySpec

Settings to manage the metadata discovery and publishing in a zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**csv_options** | [**GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions**](GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions.md) |  | [optional] 
**enabled** | **bool** | Required. Whether discovery is enabled. | [optional] 
**exclude_patterns** | **List[str]** | Optional. The list of patterns to apply for selecting data to exclude during discovery. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. | [optional] 
**include_patterns** | **List[str]** | Optional. The list of patterns to apply for selecting data to include during discovery if only a subset of the data should considered. For Cloud Storage bucket assets, these are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these are interpreted as patterns to match table names. | [optional] 
**json_options** | [**GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions**](GoogleCloudDataplexV1ZoneDiscoverySpecJsonOptions.md) |  | [optional] 
**schedule** | **str** | Optional. Cron schedule (https://en.wikipedia.org/wiki/Cron) for running discovery periodically. Successive discovery runs must be scheduled at least 60 minutes apart. The default value is to run discovery every 60 minutes. To explicitly set a timezone to the cron tab, apply a prefix in the cron tab: \&quot;CRON_TZ&#x3D;${IANA_TIME_ZONE}\&quot; or TZ&#x3D;${IANA_TIME_ZONE}\&quot;. The ${IANA_TIME_ZONE} may only be a valid string from IANA time zone database. For example, CRON_TZ&#x3D;America/New_York 1 * * * *, or TZ&#x3D;America/New_York 1 * * * *. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_zone_discovery_spec import GoogleCloudDataplexV1ZoneDiscoverySpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ZoneDiscoverySpec from a JSON string
google_cloud_dataplex_v1_zone_discovery_spec_instance = GoogleCloudDataplexV1ZoneDiscoverySpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ZoneDiscoverySpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_zone_discovery_spec_dict = google_cloud_dataplex_v1_zone_discovery_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ZoneDiscoverySpec from a dict
google_cloud_dataplex_v1_zone_discovery_spec_from_dict = GoogleCloudDataplexV1ZoneDiscoverySpec.from_dict(google_cloud_dataplex_v1_zone_discovery_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


