# GoogleCloudDataplexV1LakeMetastore

Settings to manage association of Dataproc Metastore with a lake.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | **str** | Optional. A relative reference to the Dataproc Metastore (https://cloud.google.com/dataproc-metastore/docs) service associated with the lake: projects/{project_id}/locations/{location_id}/services/{service_id} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_lake_metastore import GoogleCloudDataplexV1LakeMetastore

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1LakeMetastore from a JSON string
google_cloud_dataplex_v1_lake_metastore_instance = GoogleCloudDataplexV1LakeMetastore.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1LakeMetastore.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_lake_metastore_dict = google_cloud_dataplex_v1_lake_metastore_instance.to_dict()
# create an instance of GoogleCloudDataplexV1LakeMetastore from a dict
google_cloud_dataplex_v1_lake_metastore_from_dict = GoogleCloudDataplexV1LakeMetastore.from_dict(google_cloud_dataplex_v1_lake_metastore_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


