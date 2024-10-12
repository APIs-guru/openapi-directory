# JobTarget

A job target, for example a specific database or a container of databases that is evaluated during job execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_name** | **str** | The target database name. | [optional] 
**elastic_pool_name** | **str** | The target elastic pool name. | [optional] 
**membership_type** | **str** | Whether the target is included or excluded from the group. | [optional] [default to 'Include']
**refresh_credential** | **str** | The resource ID of the credential that is used during job execution to connect to the target and determine the list of databases inside the target. | [optional] 
**server_name** | **str** | The target server name. | [optional] 
**shard_map_name** | **str** | The target shard map. | [optional] 
**type** | **str** | The target type. | 

## Example

```python
from openapi_client.models.job_target import JobTarget

# TODO update the JSON string below
json = "{}"
# create an instance of JobTarget from a JSON string
job_target_instance = JobTarget.from_json(json)
# print the JSON string representation of the object
print(JobTarget.to_json())

# convert the object into a dict
job_target_dict = job_target_instance.to_dict()
# create an instance of JobTarget from a dict
job_target_from_dict = JobTarget.from_dict(job_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


