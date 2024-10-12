# SBNamespaceMigrate

Namespace Migrate Object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_namespace_type** | **str** | Type of namespaces | 

## Example

```python
from openapi_client.models.sb_namespace_migrate import SBNamespaceMigrate

# TODO update the JSON string below
json = "{}"
# create an instance of SBNamespaceMigrate from a JSON string
sb_namespace_migrate_instance = SBNamespaceMigrate.from_json(json)
# print the JSON string representation of the object
print(SBNamespaceMigrate.to_json())

# convert the object into a dict
sb_namespace_migrate_dict = sb_namespace_migrate_instance.to_dict()
# create an instance of SBNamespaceMigrate from a dict
sb_namespace_migrate_from_dict = SBNamespaceMigrate.from_dict(sb_namespace_migrate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


