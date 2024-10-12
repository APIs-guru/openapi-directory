# JobTargetGroupProperties

Properties of job target group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**members** | [**List[JobTarget]**](JobTarget.md) | Members of the target group. | 

## Example

```python
from openapi_client.models.job_target_group_properties import JobTargetGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobTargetGroupProperties from a JSON string
job_target_group_properties_instance = JobTargetGroupProperties.from_json(json)
# print the JSON string representation of the object
print(JobTargetGroupProperties.to_json())

# convert the object into a dict
job_target_group_properties_dict = job_target_group_properties_instance.to_dict()
# create an instance of JobTargetGroupProperties from a dict
job_target_group_properties_from_dict = JobTargetGroupProperties.from_dict(job_target_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


