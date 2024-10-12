# RelationshipListResult

The response of list relationship operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[RelationshipResourceFormat]**](RelationshipResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.relationship_list_result import RelationshipListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipListResult from a JSON string
relationship_list_result_instance = RelationshipListResult.from_json(json)
# print the JSON string representation of the object
print(RelationshipListResult.to_json())

# convert the object into a dict
relationship_list_result_dict = relationship_list_result_instance.to_dict()
# create an instance of RelationshipListResult from a dict
relationship_list_result_from_dict = RelationshipListResult.from_dict(relationship_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


