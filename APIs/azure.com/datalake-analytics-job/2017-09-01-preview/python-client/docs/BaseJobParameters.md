# BaseJobParameters

Data Lake Analytics Job Parameters base class for build and submit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreateJobProperties**](CreateJobProperties.md) |  | 
**type** | **str** | The job type of the current job (Hive, USql, or Scope (for internal use only)). | 

## Example

```python
from openapi_client.models.base_job_parameters import BaseJobParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BaseJobParameters from a JSON string
base_job_parameters_instance = BaseJobParameters.from_json(json)
# print the JSON string representation of the object
print(BaseJobParameters.to_json())

# convert the object into a dict
base_job_parameters_dict = base_job_parameters_instance.to_dict()
# create an instance of BaseJobParameters from a dict
base_job_parameters_from_dict = BaseJobParameters.from_dict(base_job_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


