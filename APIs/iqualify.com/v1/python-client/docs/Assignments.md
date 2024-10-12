# Assignments


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | [**List[Document]**](Document.md) |  | [optional] 
**marks** | [**List[Mark]**](Mark.md) |  | [optional] 
**status** | **str** |  | [optional] 
**submitted_at** | **datetime** |  | [optional] 
**updated_at** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.assignments import Assignments

# TODO update the JSON string below
json = "{}"
# create an instance of Assignments from a JSON string
assignments_instance = Assignments.from_json(json)
# print the JSON string representation of the object
print(Assignments.to_json())

# convert the object into a dict
assignments_dict = assignments_instance.to_dict()
# create an instance of Assignments from a dict
assignments_from_dict = Assignments.from_dict(assignments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


