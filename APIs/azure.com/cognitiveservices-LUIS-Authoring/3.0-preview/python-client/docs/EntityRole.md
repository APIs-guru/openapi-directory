# EntityRole

Entity extractor role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The entity role ID. | [optional] 
**name** | **str** | The entity role name. | [optional] 

## Example

```python
from openapi_client.models.entity_role import EntityRole

# TODO update the JSON string below
json = "{}"
# create an instance of EntityRole from a JSON string
entity_role_instance = EntityRole.from_json(json)
# print the JSON string representation of the object
print(EntityRole.to_json())

# convert the object into a dict
entity_role_dict = entity_role_instance.to_dict()
# create an instance of EntityRole from a dict
entity_role_from_dict = EntityRole.from_dict(entity_role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


