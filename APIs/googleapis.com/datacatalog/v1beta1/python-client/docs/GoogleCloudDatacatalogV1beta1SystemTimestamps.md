# GoogleCloudDatacatalogV1beta1SystemTimestamps

Timestamps about this resource according to a particular system.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | The creation time of the resource within the given system. | [optional] 
**expire_time** | **str** | Output only. The expiration time of the resource within the given system. Currently only apllicable to BigQuery resources. | [optional] [readonly] 
**update_time** | **str** | The last-modified time of the resource within the given system. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_system_timestamps import GoogleCloudDatacatalogV1beta1SystemTimestamps

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1SystemTimestamps from a JSON string
google_cloud_datacatalog_v1beta1_system_timestamps_instance = GoogleCloudDatacatalogV1beta1SystemTimestamps.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1SystemTimestamps.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_system_timestamps_dict = google_cloud_datacatalog_v1beta1_system_timestamps_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1SystemTimestamps from a dict
google_cloud_datacatalog_v1beta1_system_timestamps_from_dict = GoogleCloudDatacatalogV1beta1SystemTimestamps.from_dict(google_cloud_datacatalog_v1beta1_system_timestamps_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


