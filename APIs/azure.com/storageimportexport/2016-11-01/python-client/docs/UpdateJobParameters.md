# UpdateJobParameters

Update Job parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateJobParametersProperties**](UpdateJobParametersProperties.md) |  | [optional] 
**tags** | **object** | Specifies the tags that will be assigned to the job | [optional] 

## Example

```python
from openapi_client.models.update_job_parameters import UpdateJobParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateJobParameters from a JSON string
update_job_parameters_instance = UpdateJobParameters.from_json(json)
# print the JSON string representation of the object
print(UpdateJobParameters.to_json())

# convert the object into a dict
update_job_parameters_dict = update_job_parameters_instance.to_dict()
# create an instance of UpdateJobParameters from a dict
update_job_parameters_from_dict = UpdateJobParameters.from_dict(update_job_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


