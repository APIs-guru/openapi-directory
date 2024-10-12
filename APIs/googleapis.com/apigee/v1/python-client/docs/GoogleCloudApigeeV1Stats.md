# GoogleCloudApigeeV1Stats

Encapsulates a `stats` response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environments** | [**List[GoogleCloudApigeeV1StatsEnvironmentStats]**](GoogleCloudApigeeV1StatsEnvironmentStats.md) | List of query results on the environment level. | [optional] 
**hosts** | [**List[GoogleCloudApigeeV1StatsHostStats]**](GoogleCloudApigeeV1StatsHostStats.md) | List of query results grouped by host. | [optional] 
**meta_data** | [**GoogleCloudApigeeV1Metadata**](GoogleCloudApigeeV1Metadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_stats import GoogleCloudApigeeV1Stats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Stats from a JSON string
google_cloud_apigee_v1_stats_instance = GoogleCloudApigeeV1Stats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Stats.to_json())

# convert the object into a dict
google_cloud_apigee_v1_stats_dict = google_cloud_apigee_v1_stats_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Stats from a dict
google_cloud_apigee_v1_stats_from_dict = GoogleCloudApigeeV1Stats.from_dict(google_cloud_apigee_v1_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


