# JobTemplate

Transcoding job template resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**JobConfig**](JobConfig.md) |  | [optional] 
**name** | **str** | The resource name of the job template. Format: &#x60;projects/{project}/locations/{location}/jobTemplates/{job_template}&#x60; | [optional] 

## Example

```python
from openapi_client.models.job_template import JobTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of JobTemplate from a JSON string
job_template_instance = JobTemplate.from_json(json)
# print the JSON string representation of the object
print(JobTemplate.to_json())

# convert the object into a dict
job_template_dict = job_template_instance.to_dict()
# create an instance of JobTemplate from a dict
job_template_from_dict = JobTemplate.from_dict(job_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


