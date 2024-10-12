# DscCompilationJobCreateProperties

The parameters supplied to the create compilation job operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | [**DscConfigurationAssociationProperty**](DscConfigurationAssociationProperty.md) |  | 
**increment_node_configuration_build** | **bool** | If a new build version of NodeConfiguration is required. | [optional] 
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the job. | [optional] 

## Example

```python
from openapi_client.models.dsc_compilation_job_create_properties import DscCompilationJobCreateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DscCompilationJobCreateProperties from a JSON string
dsc_compilation_job_create_properties_instance = DscCompilationJobCreateProperties.from_json(json)
# print the JSON string representation of the object
print(DscCompilationJobCreateProperties.to_json())

# convert the object into a dict
dsc_compilation_job_create_properties_dict = dsc_compilation_job_create_properties_instance.to_dict()
# create an instance of DscCompilationJobCreateProperties from a dict
dsc_compilation_job_create_properties_from_dict = DscCompilationJobCreateProperties.from_dict(dsc_compilation_job_create_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


