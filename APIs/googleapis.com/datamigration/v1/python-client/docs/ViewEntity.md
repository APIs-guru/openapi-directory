# ViewEntity

View's parent is a schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constraints** | [**List[ConstraintEntity]**](ConstraintEntity.md) | View constraints. | [optional] 
**custom_features** | **Dict[str, object]** | Custom engine specific features. | [optional] 
**sql_code** | **str** | The SQL code which creates the view. | [optional] 

## Example

```python
from openapi_client.models.view_entity import ViewEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ViewEntity from a JSON string
view_entity_instance = ViewEntity.from_json(json)
# print the JSON string representation of the object
print(ViewEntity.to_json())

# convert the object into a dict
view_entity_dict = view_entity_instance.to_dict()
# create an instance of ViewEntity from a dict
view_entity_from_dict = ViewEntity.from_dict(view_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


