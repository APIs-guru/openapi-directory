# JobInput

Base class for inputs to a Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** | The discriminator for derived types. | 
**label** | **str** | A label that is assigned to a JobInput, that is used to satisfy a reference used in the Transform. For example, a Transform can be authored so as to take an image file with the label &#39;xyz&#39; and apply it as an overlay onto the input video before it is encoded. When submitting a Job, exactly one of the JobInputs should be the image file, and it should have the label &#39;xyz&#39;. | [optional] 

## Example

```python
from openapi_client.models.job_input import JobInput

# TODO update the JSON string below
json = "{}"
# create an instance of JobInput from a JSON string
job_input_instance = JobInput.from_json(json)
# print the JSON string representation of the object
print(JobInput.to_json())

# convert the object into a dict
job_input_dict = job_input_instance.to_dict()
# create an instance of JobInput from a dict
job_input_from_dict = JobInput.from_dict(job_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


