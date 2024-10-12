# DscCompilationJobProperties

Definition of Dsc Compilation job properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**DscConfigurationAssociationProperty**](DscConfigurationAssociationProperty.md) |  | [optional] 
**creation_time** | **datetime** | Gets the creation time of the job. | [optional] [readonly] 
**end_time** | **datetime** | Gets the end time of the job. | [optional] [readonly] 
**exception** | **str** | Gets the exception of the job. | [optional] [readonly] 
**job_id** | **str** | Gets the id of the job. | [optional] [readonly] 
**last_modified_time** | **datetime** | Gets the last modified time of the job. | [optional] [readonly] 
**last_status_modified_time** | **datetime** | Gets the last status modified time of the job. | [optional] [readonly] 
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the job. | [optional] 
**provisioning_state** | [**JobProvisioningStateProperty**](JobProvisioningStateProperty.md) |  | [optional] 
**run_on** | **str** | Gets or sets the runOn which specifies the group name where the job is to be executed. | [optional] 
**start_time** | **datetime** | Gets the start time of the job. | [optional] [readonly] 
**started_by** | **str** | Gets the compilation job started by. | [optional] [readonly] 
**status** | **str** | Gets or sets the status of the job. | [optional] 
**status_details** | **str** | Gets or sets the status details of the job. | [optional] 

## Example

```python
from openapi_client.models.dsc_compilation_job_properties import DscCompilationJobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DscCompilationJobProperties from a JSON string
dsc_compilation_job_properties_instance = DscCompilationJobProperties.from_json(json)
# print the JSON string representation of the object
print(DscCompilationJobProperties.to_json())

# convert the object into a dict
dsc_compilation_job_properties_dict = dsc_compilation_job_properties_instance.to_dict()
# create an instance of DscCompilationJobProperties from a dict
dsc_compilation_job_properties_from_dict = DscCompilationJobProperties.from_dict(dsc_compilation_job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


