# ResumeJobParams

Resume job params.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ResumeJobParamsProperties**](ResumeJobParamsProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.resume_job_params import ResumeJobParams

# TODO update the JSON string below
json = "{}"
# create an instance of ResumeJobParams from a JSON string
resume_job_params_instance = ResumeJobParams.from_json(json)
# print the JSON string representation of the object
print(ResumeJobParams.to_json())

# convert the object into a dict
resume_job_params_dict = resume_job_params_instance.to_dict()
# create an instance of ResumeJobParams from a dict
resume_job_params_from_dict = ResumeJobParams.from_dict(resume_job_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


