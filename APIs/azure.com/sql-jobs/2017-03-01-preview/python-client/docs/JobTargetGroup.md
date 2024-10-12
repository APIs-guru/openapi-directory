# JobTargetGroup

A group of job targets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JobTargetGroupProperties**](JobTargetGroupProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_target_group import JobTargetGroup

# TODO update the JSON string below
json = "{}"
# create an instance of JobTargetGroup from a JSON string
job_target_group_instance = JobTargetGroup.from_json(json)
# print the JSON string representation of the object
print(JobTargetGroup.to_json())

# convert the object into a dict
job_target_group_dict = job_target_group_instance.to_dict()
# create an instance of JobTargetGroup from a dict
job_target_group_from_dict = JobTargetGroup.from_dict(job_target_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


