# PutJobParameters

Put Job parameters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Specifies the supported Azure location where the job should be created | [optional] 
**properties** | [**JobDetails**](JobDetails.md) |  | [optional] 
**tags** | **object** | Specifies the tags that will be assigned to the job. | [optional] 

## Example

```python
from openapi_client.models.put_job_parameters import PutJobParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PutJobParameters from a JSON string
put_job_parameters_instance = PutJobParameters.from_json(json)
# print the JSON string representation of the object
print(PutJobParameters.to_json())

# convert the object into a dict
put_job_parameters_dict = put_job_parameters_instance.to_dict()
# create an instance of PutJobParameters from a dict
put_job_parameters_from_dict = PutJobParameters.from_dict(put_job_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


