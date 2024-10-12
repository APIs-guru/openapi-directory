# AssignmentCanvas

A Canvas LMS assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Link to Canvas assignment | [optional] 
**id** | **str** | Unique identifier of the course on Canvas assignment | [optional] 

## Example

```python
from openapi_client.models.assignment_canvas import AssignmentCanvas

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentCanvas from a JSON string
assignment_canvas_instance = AssignmentCanvas.from_json(json)
# print the JSON string representation of the object
print(AssignmentCanvas.to_json())

# convert the object into a dict
assignment_canvas_dict = assignment_canvas_instance.to_dict()
# create an instance of AssignmentCanvas from a dict
assignment_canvas_from_dict = AssignmentCanvas.from_dict(assignment_canvas_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


