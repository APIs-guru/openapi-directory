# JobResourceUpdateParameter

The JobResourceUpdateParameter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateJobProperties**](UpdateJobProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). | [optional] 

## Example

```python
from openapi_client.models.job_resource_update_parameter import JobResourceUpdateParameter

# TODO update the JSON string below
json = "{}"
# create an instance of JobResourceUpdateParameter from a JSON string
job_resource_update_parameter_instance = JobResourceUpdateParameter.from_json(json)
# print the JSON string representation of the object
print(JobResourceUpdateParameter.to_json())

# convert the object into a dict
job_resource_update_parameter_dict = job_resource_update_parameter_instance.to_dict()
# create an instance of JobResourceUpdateParameter from a dict
job_resource_update_parameter_from_dict = JobResourceUpdateParameter.from_dict(job_resource_update_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


