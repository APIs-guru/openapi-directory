# AssignmentCopy

Assignment copy operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment** | **str** | An optional destination assignment where the original assignement will be copied. Must be a draft. | [optional] 
**classroom** | **str** | The destination classroom where the assignment will be copied | [optional] 
**scheduled_date** | **datetime** | The publication (scheduled) date of the assignment. If this one is specified, the assignment will only be listed to the teachers of the class. Alternatively the existing &#x60;scheduledDate&#x60; from the copied assignment will be used.  | [optional] 

## Example

```python
from openapi_client.models.assignment_copy import AssignmentCopy

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentCopy from a JSON string
assignment_copy_instance = AssignmentCopy.from_json(json)
# print the JSON string representation of the object
print(AssignmentCopy.to_json())

# convert the object into a dict
assignment_copy_dict = assignment_copy_instance.to_dict()
# create an instance of AssignmentCopy from a dict
assignment_copy_from_dict = AssignmentCopy.from_dict(assignment_copy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


