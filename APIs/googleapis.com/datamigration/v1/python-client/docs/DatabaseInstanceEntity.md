# DatabaseInstanceEntity

DatabaseInstance acts as a parent entity to other database entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 

## Example

```python
from openapi_client.models.database_instance_entity import DatabaseInstanceEntity

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseInstanceEntity from a JSON string
database_instance_entity_instance = DatabaseInstanceEntity.from_json(json)
# print the JSON string representation of the object
print(DatabaseInstanceEntity.to_json())

# convert the object into a dict
database_instance_entity_dict = database_instance_entity_instance.to_dict()
# create an instance of DatabaseInstanceEntity from a dict
database_instance_entity_from_dict = DatabaseInstanceEntity.from_dict(database_instance_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


