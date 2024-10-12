# GoogleCloudDataplexV1LakeMetastoreStatus

Status of Lake and Dataproc Metastore service instance association.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | The URI of the endpoint used to access the Metastore service. | [optional] 
**message** | **str** | Additional information about the current status. | [optional] 
**state** | **str** | Current state of association. | [optional] 
**update_time** | **str** | Last update time of the metastore status of the lake. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_lake_metastore_status import GoogleCloudDataplexV1LakeMetastoreStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1LakeMetastoreStatus from a JSON string
google_cloud_dataplex_v1_lake_metastore_status_instance = GoogleCloudDataplexV1LakeMetastoreStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1LakeMetastoreStatus.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_lake_metastore_status_dict = google_cloud_dataplex_v1_lake_metastore_status_instance.to_dict()
# create an instance of GoogleCloudDataplexV1LakeMetastoreStatus from a dict
google_cloud_dataplex_v1_lake_metastore_status_from_dict = GoogleCloudDataplexV1LakeMetastoreStatus.from_dict(google_cloud_dataplex_v1_lake_metastore_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


