# JobPreparation

Job preparation settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** | The command line to execute. If containerSettings is specified on the job, this commandLine will be executed in the same container as job. Otherwise it will be executed on the node. | 

## Example

```python
from openapi_client.models.job_preparation import JobPreparation

# TODO update the JSON string below
json = "{}"
# create an instance of JobPreparation from a JSON string
job_preparation_instance = JobPreparation.from_json(json)
# print the JSON string representation of the object
print(JobPreparation.to_json())

# convert the object into a dict
job_preparation_dict = job_preparation_instance.to_dict()
# create an instance of JobPreparation from a dict
job_preparation_from_dict = JobPreparation.from_dict(job_preparation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


