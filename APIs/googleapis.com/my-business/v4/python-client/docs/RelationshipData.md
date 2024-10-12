# RelationshipData

Information of all parent and children locations related to this one.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_chain** | **str** | The resource name of the Chain that this location is member of. How to find Chain ID | [optional] 

## Example

```python
from openapi_client.models.relationship_data import RelationshipData

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipData from a JSON string
relationship_data_instance = RelationshipData.from_json(json)
# print the JSON string representation of the object
print(RelationshipData.to_json())

# convert the object into a dict
relationship_data_dict = relationship_data_instance.to_dict()
# create an instance of RelationshipData from a dict
relationship_data_from_dict = RelationshipData.from_dict(relationship_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


