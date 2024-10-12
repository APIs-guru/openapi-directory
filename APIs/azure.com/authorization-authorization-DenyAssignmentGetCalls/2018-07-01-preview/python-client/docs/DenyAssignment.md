# DenyAssignment

Deny Assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The deny assignment ID. | [optional] [readonly] 
**name** | **str** | The deny assignment name. | [optional] [readonly] 
**properties** | [**DenyAssignmentProperties**](DenyAssignmentProperties.md) |  | [optional] 
**type** | **str** | The deny assignment type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deny_assignment import DenyAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of DenyAssignment from a JSON string
deny_assignment_instance = DenyAssignment.from_json(json)
# print the JSON string representation of the object
print(DenyAssignment.to_json())

# convert the object into a dict
deny_assignment_dict = deny_assignment_instance.to_dict()
# create an instance of DenyAssignment from a dict
deny_assignment_from_dict = DenyAssignment.from_dict(deny_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


