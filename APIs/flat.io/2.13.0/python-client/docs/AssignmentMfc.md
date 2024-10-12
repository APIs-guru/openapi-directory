# AssignmentMfc

A MusicFirst Classroom assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Link to MusicFirst Classroom task | [optional] 
**id** | **str** | Unique identifier of the course on MusicFirst Task | [optional] 

## Example

```python
from openapi_client.models.assignment_mfc import AssignmentMfc

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentMfc from a JSON string
assignment_mfc_instance = AssignmentMfc.from_json(json)
# print the JSON string representation of the object
print(AssignmentMfc.to_json())

# convert the object into a dict
assignment_mfc_dict = assignment_mfc_instance.to_dict()
# create an instance of AssignmentMfc from a dict
assignment_mfc_from_dict = AssignmentMfc.from_dict(assignment_mfc_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


