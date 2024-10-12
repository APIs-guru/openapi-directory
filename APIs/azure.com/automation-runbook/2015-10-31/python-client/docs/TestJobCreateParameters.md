# TestJobCreateParameters

The parameters supplied to the create test job operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **Dict[str, str]** | Gets or sets the parameters of the test job. | [optional] 
**run_on** | **str** | Gets or sets the runOn which specifies the group name where the job is to be executed. | [optional] 

## Example

```python
from openapi_client.models.test_job_create_parameters import TestJobCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of TestJobCreateParameters from a JSON string
test_job_create_parameters_instance = TestJobCreateParameters.from_json(json)
# print the JSON string representation of the object
print(TestJobCreateParameters.to_json())

# convert the object into a dict
test_job_create_parameters_dict = test_job_create_parameters_instance.to_dict()
# create an instance of TestJobCreateParameters from a dict
test_job_create_parameters_from_dict = TestJobCreateParameters.from_dict(test_job_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


