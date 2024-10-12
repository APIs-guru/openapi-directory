# AlterMetadataResourceLocationRequest

Request message for DataprocMetastore.AlterMetadataResourceLocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_uri** | **str** | Required. The new location URI for the metadata resource. | [optional] 
**resource_name** | **str** | Required. The relative metadata resource name in the following format.databases/{database_id} or databases/{database_id}/tables/{table_id} or databases/{database_id}/tables/{table_id}/partitions/{partition_id} | [optional] 

## Example

```python
from openapi_client.models.alter_metadata_resource_location_request import AlterMetadataResourceLocationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AlterMetadataResourceLocationRequest from a JSON string
alter_metadata_resource_location_request_instance = AlterMetadataResourceLocationRequest.from_json(json)
# print the JSON string representation of the object
print(AlterMetadataResourceLocationRequest.to_json())

# convert the object into a dict
alter_metadata_resource_location_request_dict = alter_metadata_resource_location_request_instance.to_dict()
# create an instance of AlterMetadataResourceLocationRequest from a dict
alter_metadata_resource_location_request_from_dict = AlterMetadataResourceLocationRequest.from_dict(alter_metadata_resource_location_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


