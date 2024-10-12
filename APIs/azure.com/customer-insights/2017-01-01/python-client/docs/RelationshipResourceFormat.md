# RelationshipResourceFormat

The relationship resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**RelationshipDefinition**](RelationshipDefinition.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.relationship_resource_format import RelationshipResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipResourceFormat from a JSON string
relationship_resource_format_instance = RelationshipResourceFormat.from_json(json)
# print the JSON string representation of the object
print(RelationshipResourceFormat.to_json())

# convert the object into a dict
relationship_resource_format_dict = relationship_resource_format_instance.to_dict()
# create an instance of RelationshipResourceFormat from a dict
relationship_resource_format_from_dict = RelationshipResourceFormat.from_dict(relationship_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


