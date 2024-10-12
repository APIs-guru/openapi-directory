# AssignmentLti

An LTI assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID in the LMS | [optional] 

## Example

```python
from openapi_client.models.assignment_lti import AssignmentLti

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentLti from a JSON string
assignment_lti_instance = AssignmentLti.from_json(json)
# print the JSON string representation of the object
print(AssignmentLti.to_json())

# convert the object into a dict
assignment_lti_dict = assignment_lti_instance.to_dict()
# create an instance of AssignmentLti from a dict
assignment_lti_from_dict = AssignmentLti.from_dict(assignment_lti_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


