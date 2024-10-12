# AssignmentStatus

The status of Blueprint assignment. This field is readonly.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_modified** | **str** | Last modified time of this blueprint. | [optional] [readonly] 
**time_created** | **str** | Creation time of this blueprint. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assignment_status import AssignmentStatus

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentStatus from a JSON string
assignment_status_instance = AssignmentStatus.from_json(json)
# print the JSON string representation of the object
print(AssignmentStatus.to_json())

# convert the object into a dict
assignment_status_dict = assignment_status_instance.to_dict()
# create an instance of AssignmentStatus from a dict
assignment_status_from_dict = AssignmentStatus.from_dict(assignment_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


