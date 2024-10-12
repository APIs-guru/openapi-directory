# AssignmentOperation

Represents underlying deployment detail for each update to the blueprint assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AssignmentOperationProperties**](AssignmentOperationProperties.md) |  | [optional] 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assignment_operation import AssignmentOperation

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentOperation from a JSON string
assignment_operation_instance = AssignmentOperation.from_json(json)
# print the JSON string representation of the object
print(AssignmentOperation.to_json())

# convert the object into a dict
assignment_operation_dict = assignment_operation_instance.to_dict()
# create an instance of AssignmentOperation from a dict
assignment_operation_from_dict = AssignmentOperation.from_dict(assignment_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


