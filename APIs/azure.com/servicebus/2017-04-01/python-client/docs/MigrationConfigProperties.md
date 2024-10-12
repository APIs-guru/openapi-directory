# MigrationConfigProperties

Single item in List or Get Migration Config operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Properties required to the Create Migration Configuration | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.migration_config_properties import MigrationConfigProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MigrationConfigProperties from a JSON string
migration_config_properties_instance = MigrationConfigProperties.from_json(json)
# print the JSON string representation of the object
print(MigrationConfigProperties.to_json())

# convert the object into a dict
migration_config_properties_dict = migration_config_properties_instance.to_dict()
# create an instance of MigrationConfigProperties from a dict
migration_config_properties_from_dict = MigrationConfigProperties.from_dict(migration_config_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


