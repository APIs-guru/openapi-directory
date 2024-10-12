# AssignmentJobCreatedResource

Azure resource created from deployment job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **Dict[str, str]** | Additional properties in a dictionary. | [optional] 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assignment_job_created_resource import AssignmentJobCreatedResource

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentJobCreatedResource from a JSON string
assignment_job_created_resource_instance = AssignmentJobCreatedResource.from_json(json)
# print the JSON string representation of the object
print(AssignmentJobCreatedResource.to_json())

# convert the object into a dict
assignment_job_created_resource_dict = assignment_job_created_resource_instance.to_dict()
# create an instance of AssignmentJobCreatedResource from a dict
assignment_job_created_resource_from_dict = AssignmentJobCreatedResource.from_dict(assignment_job_created_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


