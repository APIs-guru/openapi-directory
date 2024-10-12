# EntityInsertVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Descriptive label for the entity, e.g. Wikipedia URL | 
**name** | **str** | Entity name | 
**normalized** | **str** | Normalized form of the entity. Will replace entity name in the output | 
**type** | **str** | Type of the entity (Company, Person, any custom type) | 

## Example

```python
from openapi_client.models.entity_insert_version import EntityInsertVersion

# TODO update the JSON string below
json = "{}"
# create an instance of EntityInsertVersion from a JSON string
entity_insert_version_instance = EntityInsertVersion.from_json(json)
# print the JSON string representation of the object
print(EntityInsertVersion.to_json())

# convert the object into a dict
entity_insert_version_dict = entity_insert_version_instance.to_dict()
# create an instance of EntityInsertVersion from a dict
entity_insert_version_from_dict = EntityInsertVersion.from_dict(entity_insert_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


