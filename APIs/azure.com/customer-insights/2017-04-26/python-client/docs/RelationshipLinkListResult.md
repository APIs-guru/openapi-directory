# RelationshipLinkListResult

The response of list relationship link operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[RelationshipLinkResourceFormat]**](RelationshipLinkResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.relationship_link_list_result import RelationshipLinkListResult

# TODO update the JSON string below
json = "{}"
# create an instance of RelationshipLinkListResult from a JSON string
relationship_link_list_result_instance = RelationshipLinkListResult.from_json(json)
# print the JSON string representation of the object
print(RelationshipLinkListResult.to_json())

# convert the object into a dict
relationship_link_list_result_dict = relationship_link_list_result_instance.to_dict()
# create an instance of RelationshipLinkListResult from a dict
relationship_link_list_result_from_dict = RelationshipLinkListResult.from_dict(relationship_link_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


