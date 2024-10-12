# BuildJobParameters

The parameters used to build a new Data Lake Analytics job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the friendly name of the job to build. | [optional] 
**properties** | [**CreateJobProperties**](CreateJobProperties.md) |  | 
**type** | **str** | the job type of the current job (Hive or USql). | 

## Example

```python
from openapi_client.models.build_job_parameters import BuildJobParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BuildJobParameters from a JSON string
build_job_parameters_instance = BuildJobParameters.from_json(json)
# print the JSON string representation of the object
print(BuildJobParameters.to_json())

# convert the object into a dict
build_job_parameters_dict = build_job_parameters_instance.to_dict()
# create an instance of BuildJobParameters from a dict
build_job_parameters_from_dict = BuildJobParameters.from_dict(build_job_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


