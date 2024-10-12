# GoogleCloudApigeeV1EntityMetadata

Metadata common to many entities in this API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Time at which the API proxy was created, in milliseconds since epoch. | [optional] 
**last_modified_at** | **str** | Time at which the API proxy was most recently modified, in milliseconds since epoch. | [optional] 
**sub_type** | **str** | The type of entity described | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_entity_metadata import GoogleCloudApigeeV1EntityMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1EntityMetadata from a JSON string
google_cloud_apigee_v1_entity_metadata_instance = GoogleCloudApigeeV1EntityMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1EntityMetadata.to_json())

# convert the object into a dict
google_cloud_apigee_v1_entity_metadata_dict = google_cloud_apigee_v1_entity_metadata_instance.to_dict()
# create an instance of GoogleCloudApigeeV1EntityMetadata from a dict
google_cloud_apigee_v1_entity_metadata_from_dict = GoogleCloudApigeeV1EntityMetadata.from_dict(google_cloud_apigee_v1_entity_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


