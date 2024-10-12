# JobOutput

Describes all the properties of a JobOutput.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 
**error** | [**JobError**](JobError.md) |  | [optional] 
**progress** | **int** | If the JobOutput is in a Processing state, this contains the job completion percentage.  The value is an estimate and not intended to be used to predict job completion times. To determine if the JobOutput is complete, use the State property. | [optional] [readonly] 
**state** | **str** | Describes the state of the JobOutput. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_output import JobOutput

# TODO update the JSON string below
json = "{}"
# create an instance of JobOutput from a JSON string
job_output_instance = JobOutput.from_json(json)
# print the JSON string representation of the object
print(JobOutput.to_json())

# convert the object into a dict
job_output_dict = job_output_instance.to_dict()
# create an instance of JobOutput from a dict
job_output_from_dict = JobOutput.from_dict(job_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


