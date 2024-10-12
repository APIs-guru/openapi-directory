# RelationshipProperties

Relationship properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**ResourceReference**](ResourceReference.md) |  | 
**end_time** | **datetime** | Relationship end time. | [optional] 
**source** | [**ResourceReference**](ResourceReference.md) |  | 
**start_time** | **datetime** | Relationship start time. | [optional] 

## Example

```python
from openapi_client.models.relationship_properties import RelationshipProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipProperties from a JSON string
relationship_properties_instance = RelationshipProperties.from_json(json)
# print the JSON string representation of the object
print(RelationshipProperties.to_json())

# convert the object into a dict
relationship_properties_dict = relationship_properties_instance.to_dict()
# create an instance of RelationshipProperties from a dict
relationship_properties_from_dict = RelationshipProperties.from_dict(relationship_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


