# GoogleCloudDatacatalogV1SystemTimestamps

Timestamps associated with this resource in a particular system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Creation timestamp of the resource within the given system. | [optional] 
**expire_time** | **str** | Output only. Expiration timestamp of the resource within the given system. Currently only applicable to BigQuery resources. | [optional] [readonly] 
**update_time** | **str** | Timestamp of the last modification of the resource or its metadata within a given system. Note: Depending on the source system, not every modification updates this timestamp. For example, BigQuery timestamps every metadata modification but not data or permission changes. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_system_timestamps import GoogleCloudDatacatalogV1SystemTimestamps

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1SystemTimestamps from a JSON string
google_cloud_datacatalog_v1_system_timestamps_instance = GoogleCloudDatacatalogV1SystemTimestamps.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1SystemTimestamps.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_system_timestamps_dict = google_cloud_datacatalog_v1_system_timestamps_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1SystemTimestamps from a dict
google_cloud_datacatalog_v1_system_timestamps_from_dict = GoogleCloudDatacatalogV1SystemTimestamps.from_dict(google_cloud_datacatalog_v1_system_timestamps_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


