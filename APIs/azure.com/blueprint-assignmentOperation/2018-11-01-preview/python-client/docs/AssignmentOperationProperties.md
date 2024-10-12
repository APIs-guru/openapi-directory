# AssignmentOperationProperties

Properties of AssignmentOperation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_state** | **str** | State of this blueprint assignment operation. | [optional] 
**blueprint_version** | **str** | The published version of the blueprint definition used for the blueprint assignment operation. | [optional] 
**deployments** | [**List[AssignmentDeploymentJob]**](AssignmentDeploymentJob.md) | List of jobs in this blueprint assignment operation. | [optional] 
**time_created** | **str** | Create time of this blueprint assignment operation. | [optional] 
**time_finished** | **str** | Finish time of the overall underlying deployments. | [optional] 
**time_started** | **str** | Start time of the underlying deployment. | [optional] 

## Example

```python
from openapi_client.models.assignment_operation_properties import AssignmentOperationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentOperationProperties from a JSON string
assignment_operation_properties_instance = AssignmentOperationProperties.from_json(json)
# print the JSON string representation of the object
print(AssignmentOperationProperties.to_json())

# convert the object into a dict
assignment_operation_properties_dict = assignment_operation_properties_instance.to_dict()
# create an instance of AssignmentOperationProperties from a dict
assignment_operation_properties_from_dict = AssignmentOperationProperties.from_dict(assignment_operation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


