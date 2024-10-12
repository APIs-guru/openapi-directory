# RelationshipDetails

Details about a relationship column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**linked_table** | **str** | The name of the table this relationship is linked to. | [optional] 

## Example

```python
from openapi_client.models.relationship_details import RelationshipDetails

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipDetails from a JSON string
relationship_details_instance = RelationshipDetails.from_json(json)
# print the JSON string representation of the object
print(RelationshipDetails.to_json())

# convert the object into a dict
relationship_details_dict = relationship_details_instance.to_dict()
# create an instance of RelationshipDetails from a dict
relationship_details_from_dict = RelationshipDetails.from_dict(relationship_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


