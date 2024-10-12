# GoogleCloudDataplexV1Entity

Represents tables and fileset metadata contained within a zone.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | [**GoogleCloudDataplexV1StorageAccess**](GoogleCloudDataplexV1StorageAccess.md) |  | [optional] 
**asset** | **str** | Required. Immutable. The ID of the asset associated with the storage location containing the entity data. The entity must be with in the same zone with the asset. | [optional] 
**catalog_entry** | **str** | Output only. The name of the associated Data Catalog entry. | [optional] [readonly] 
**compatibility** | [**GoogleCloudDataplexV1EntityCompatibilityStatus**](GoogleCloudDataplexV1EntityCompatibilityStatus.md) |  | [optional] 
**create_time** | **str** | Output only. The time when the entity was created. | [optional] [readonly] 
**data_path** | **str** | Required. Immutable. The storage path of the entity data. For Cloud Storage data, this is the fully-qualified path to the entity, such as gs://bucket/path/to/data. For BigQuery data, this is the name of the table resource, such as projects/project_id/datasets/dataset_id/tables/table_id. | [optional] 
**data_path_pattern** | **str** | Optional. The set of items within the data path constituting the data in the entity, represented as a glob path. Example: gs://bucket/path/to/data/**/*.csv. | [optional] 
**description** | **str** | Optional. User friendly longer description text. Must be shorter than or equal to 1024 characters. | [optional] 
**display_name** | **str** | Optional. Display name must be shorter than or equal to 256 characters. | [optional] 
**etag** | **str** | Optional. The etag associated with the entity, which can be retrieved with a GetEntity request. Required for update and delete requests. | [optional] 
**format** | [**GoogleCloudDataplexV1StorageFormat**](GoogleCloudDataplexV1StorageFormat.md) |  | [optional] 
**id** | **str** | Required. A user-provided entity ID. It is mutable, and will be used as the published table name. Specifying a new ID in an update entity request will override the existing value. The ID must contain only letters (a-z, A-Z), numbers (0-9), and underscores, and consist of 256 or fewer characters. | [optional] 
**name** | **str** | Output only. The resource name of the entity, of the form: projects/{project_number}/locations/{location_id}/lakes/{lake_id}/zones/{zone_id}/entities/{id}. | [optional] [readonly] 
**var_schema** | [**GoogleCloudDataplexV1Schema**](GoogleCloudDataplexV1Schema.md) |  | [optional] 
**system** | **str** | Required. Immutable. Identifies the storage system of the entity data. | [optional] 
**type** | **str** | Required. Immutable. The type of entity. | [optional] 
**uid** | **str** | Output only. System generated unique ID for the Entity. This ID will be different if the Entity is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the entity was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_entity import GoogleCloudDataplexV1Entity

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Entity from a JSON string
google_cloud_dataplex_v1_entity_instance = GoogleCloudDataplexV1Entity.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Entity.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_entity_dict = google_cloud_dataplex_v1_entity_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Entity from a dict
google_cloud_dataplex_v1_entity_from_dict = GoogleCloudDataplexV1Entity.from_dict(google_cloud_dataplex_v1_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


