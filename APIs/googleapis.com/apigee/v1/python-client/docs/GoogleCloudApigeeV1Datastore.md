# GoogleCloudApigeeV1Datastore

The data store defines the connection to export data repository (Cloud Storage, BigQuery), including the credentials used to access the data repository.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Datastore create time, in milliseconds since the epoch of 1970-01-01T00:00:00Z | [optional] [readonly] 
**datastore_config** | [**GoogleCloudApigeeV1DatastoreConfig**](GoogleCloudApigeeV1DatastoreConfig.md) |  | [optional] 
**display_name** | **str** | Required. Display name in UI | [optional] 
**last_update_time** | **str** | Output only. Datastore last update time, in milliseconds since the epoch of 1970-01-01T00:00:00Z | [optional] [readonly] 
**org** | **str** | Output only. Organization that the datastore belongs to | [optional] [readonly] 
**var_self** | **str** | Output only. Resource link of Datastore. Example: &#x60;/organizations/{org}/analytics/datastores/{uuid}&#x60; | [optional] [readonly] 
**target_type** | **str** | Destination storage type. Supported types &#x60;gcs&#x60; or &#x60;bigquery&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_datastore import GoogleCloudApigeeV1Datastore

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Datastore from a JSON string
google_cloud_apigee_v1_datastore_instance = GoogleCloudApigeeV1Datastore.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Datastore.to_json())

# convert the object into a dict
google_cloud_apigee_v1_datastore_dict = google_cloud_apigee_v1_datastore_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Datastore from a dict
google_cloud_apigee_v1_datastore_from_dict = GoogleCloudApigeeV1Datastore.from_dict(google_cloud_apigee_v1_datastore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


