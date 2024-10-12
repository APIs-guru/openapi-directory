# MigrationSource

Subset of the source instance configuration that is available when reading the cluster resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_port** | **str** | Output only. The host and port of the on-premises instance in host:port format | [optional] [readonly] 
**reference_id** | **str** | Output only. Place holder for the external source identifier(e.g DMS job name) that created the cluster. | [optional] [readonly] 
**source_type** | **str** | Output only. Type of migration source. | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_source import MigrationSource

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationSource from a JSON string
migration_source_instance = MigrationSource.from_json(json)
# print the JSON string representation of the object
print(MigrationSource.to_json())

# convert the object into a dict
migration_source_dict = migration_source_instance.to_dict()
# create an instance of MigrationSource from a dict
migration_source_from_dict = MigrationSource.from_dict(migration_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


