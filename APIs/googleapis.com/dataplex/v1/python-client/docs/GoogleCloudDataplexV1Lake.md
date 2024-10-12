# GoogleCloudDataplexV1Lake

A lake is a centralized repository for managing enterprise data across the organization distributed across many cloud projects, and stored in a variety of storage services such as Google Cloud Storage and BigQuery. The resources attached to a lake are referred to as managed resources. Data within these managed resources can be structured or unstructured. A lake provides data admins with tools to organize, secure and manage their data at scale, and provides data scientists and data engineers an integrated experience to easily search, discover, analyze and transform data and associated metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_status** | [**GoogleCloudDataplexV1AssetStatus**](GoogleCloudDataplexV1AssetStatus.md) |  | [optional] 
**create_time** | **str** | Output only. The time when the lake was created. | [optional] [readonly] 
**description** | **str** | Optional. Description of the lake. | [optional] 
**display_name** | **str** | Optional. User friendly display name. | [optional] 
**labels** | **Dict[str, str]** | Optional. User-defined labels for the lake. | [optional] 
**metastore** | [**GoogleCloudDataplexV1LakeMetastore**](GoogleCloudDataplexV1LakeMetastore.md) |  | [optional] 
**metastore_status** | [**GoogleCloudDataplexV1LakeMetastoreStatus**](GoogleCloudDataplexV1LakeMetastoreStatus.md) |  | [optional] 
**name** | **str** | Output only. The relative resource name of the lake, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}. | [optional] [readonly] 
**service_account** | **str** | Output only. Service account associated with this lake. This service account must be authorized to access or operate on resources managed by the lake. | [optional] [readonly] 
**state** | **str** | Output only. Current state of the lake. | [optional] [readonly] 
**uid** | **str** | Output only. System generated globally unique ID for the lake. This ID will be different if the lake is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the lake was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_lake import GoogleCloudDataplexV1Lake

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Lake from a JSON string
google_cloud_dataplex_v1_lake_instance = GoogleCloudDataplexV1Lake.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Lake.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_lake_dict = google_cloud_dataplex_v1_lake_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Lake from a dict
google_cloud_dataplex_v1_lake_from_dict = GoogleCloudDataplexV1Lake.from_dict(google_cloud_dataplex_v1_lake_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


