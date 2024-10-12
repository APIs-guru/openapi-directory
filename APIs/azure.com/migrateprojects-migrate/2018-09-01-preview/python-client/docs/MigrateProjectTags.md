# MigrateProjectTags

Gets or sets the tags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_properties** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.migrate_project_tags import MigrateProjectTags

# TODO update the JSON string below
json = "{}"
# create an instance of MigrateProjectTags from a JSON string
migrate_project_tags_instance = MigrateProjectTags.from_json(json)
# print the JSON string representation of the object
print(MigrateProjectTags.to_json())

# convert the object into a dict
migrate_project_tags_dict = migrate_project_tags_instance.to_dict()
# create an instance of MigrateProjectTags from a dict
migrate_project_tags_from_dict = MigrateProjectTags.from_dict(migrate_project_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


