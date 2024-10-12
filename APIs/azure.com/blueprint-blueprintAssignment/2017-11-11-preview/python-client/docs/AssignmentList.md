# AssignmentList

List of Blueprint assignments

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next page of results. | [optional] [readonly] 
**value** | [**List[Assignment]**](Assignment.md) | List of Blueprint assignments. | [optional] 

## Example

```python
from openapi_client.models.assignment_list import AssignmentList

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentList from a JSON string
assignment_list_instance = AssignmentList.from_json(json)
# print the JSON string representation of the object
print(AssignmentList.to_json())

# convert the object into a dict
assignment_list_dict = assignment_list_instance.to_dict()
# create an instance of AssignmentList from a dict
assignment_list_from_dict = AssignmentList.from_dict(assignment_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


