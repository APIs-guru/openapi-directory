# ResumeJobParamsProperties

Resume job properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | Resume job comments. | [optional] 

## Example

```python
from openapi_client.models.resume_job_params_properties import ResumeJobParamsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ResumeJobParamsProperties from a JSON string
resume_job_params_properties_instance = ResumeJobParamsProperties.from_json(json)
# print the JSON string representation of the object
print(ResumeJobParamsProperties.to_json())

# convert the object into a dict
resume_job_params_properties_dict = resume_job_params_properties_instance.to_dict()
# create an instance of ResumeJobParamsProperties from a dict
resume_job_params_properties_from_dict = ResumeJobParamsProperties.from_dict(resume_job_params_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


