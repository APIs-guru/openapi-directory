# AssignmentOperationList

List of AssignmentOperation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next page of results. | [optional] [readonly] 
**value** | [**List[AssignmentOperation]**](AssignmentOperation.md) | List of AssignmentOperation. | [optional] 

## Example

```python
from openapi_client.models.assignment_operation_list import AssignmentOperationList

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentOperationList from a JSON string
assignment_operation_list_instance = AssignmentOperationList.from_json(json)
# print the JSON string representation of the object
print(AssignmentOperationList.to_json())

# convert the object into a dict
assignment_operation_list_dict = assignment_operation_list_instance.to_dict()
# create an instance of AssignmentOperationList from a dict
assignment_operation_list_from_dict = AssignmentOperationList.from_dict(assignment_operation_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


