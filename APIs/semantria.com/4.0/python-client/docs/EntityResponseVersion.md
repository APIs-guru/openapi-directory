# EntityResponseVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique user entity identifier | 
**label** | **str** | Descriptive label for the entity, e.g. Wikipedia URL | 
**modified** | **str** | The timestamp of the latest update of the record. Creation date of update didn&#39;t occur | 
**name** | **str** | Entity name | 
**normalized** | **str** | Normalized form of the entity. Will replace entity name in the output | 
**type** | **str** | Type of the entity (Company, Person, any custom type) | 

## Example

```python
from openapi_client.models.entity_response_version import EntityResponseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of EntityResponseVersion from a JSON string
entity_response_version_instance = EntityResponseVersion.from_json(json)
# print the JSON string representation of the object
print(EntityResponseVersion.to_json())

# convert the object into a dict
entity_response_version_dict = entity_response_version_instance.to_dict()
# create an instance of EntityResponseVersion from a dict
entity_response_version_from_dict = EntityResponseVersion.from_dict(entity_response_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


