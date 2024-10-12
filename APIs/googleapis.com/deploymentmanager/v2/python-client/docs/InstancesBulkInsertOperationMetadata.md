# InstancesBulkInsertOperationMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**per_location_status** | [**Dict[str, BulkInsertOperationStatus]**](BulkInsertOperationStatus.md) | Status information per location (location name is key). Example key: zones/us-central1-a | [optional] 

## Example

```python
from openapi_client.models.instances_bulk_insert_operation_metadata import InstancesBulkInsertOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesBulkInsertOperationMetadata from a JSON string
instances_bulk_insert_operation_metadata_instance = InstancesBulkInsertOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(InstancesBulkInsertOperationMetadata.to_json())

# convert the object into a dict
instances_bulk_insert_operation_metadata_dict = instances_bulk_insert_operation_metadata_instance.to_dict()
# create an instance of InstancesBulkInsertOperationMetadata from a dict
instances_bulk_insert_operation_metadata_from_dict = InstancesBulkInsertOperationMetadata.from_dict(instances_bulk_insert_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


