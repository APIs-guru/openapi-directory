# JobVersion

A job version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_version import JobVersion

# TODO update the JSON string below
json = "{}"
# create an instance of JobVersion from a JSON string
job_version_instance = JobVersion.from_json(json)
# print the JSON string representation of the object
print(JobVersion.to_json())

# convert the object into a dict
job_version_dict = job_version_instance.to_dict()
# create an instance of JobVersion from a dict
job_version_from_dict = JobVersion.from_dict(job_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


