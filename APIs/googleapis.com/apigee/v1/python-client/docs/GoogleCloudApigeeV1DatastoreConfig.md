# GoogleCloudApigeeV1DatastoreConfig

Configuration detail for datastore

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bucket_name** | **str** | Name of the Cloud Storage bucket. Required for &#x60;gcs&#x60; target_type. | [optional] 
**dataset_name** | **str** | BigQuery dataset name Required for &#x60;bigquery&#x60; target_type. | [optional] 
**path** | **str** | Path of Cloud Storage bucket Required for &#x60;gcs&#x60; target_type. | [optional] 
**project_id** | **str** | Required. GCP project in which the datastore exists | [optional] 
**table_prefix** | **str** | Prefix of BigQuery table Required for &#x60;bigquery&#x60; target_type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_datastore_config import GoogleCloudApigeeV1DatastoreConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DatastoreConfig from a JSON string
google_cloud_apigee_v1_datastore_config_instance = GoogleCloudApigeeV1DatastoreConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DatastoreConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_datastore_config_dict = google_cloud_apigee_v1_datastore_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DatastoreConfig from a dict
google_cloud_apigee_v1_datastore_config_from_dict = GoogleCloudApigeeV1DatastoreConfig.from_dict(google_cloud_apigee_v1_datastore_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


