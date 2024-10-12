# JobErrorDetail

Details of JobOutput errors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code describing the error detail. | [optional] [readonly] 
**message** | **str** | A human-readable representation of the error. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_error_detail import JobErrorDetail

# TODO update the JSON string below
json = "{}"
# create an instance of JobErrorDetail from a JSON string
job_error_detail_instance = JobErrorDetail.from_json(json)
# print the JSON string representation of the object
print(JobErrorDetail.to_json())

# convert the object into a dict
job_error_detail_dict = job_error_detail_instance.to_dict()
# create an instance of JobErrorDetail from a dict
job_error_detail_from_dict = JobErrorDetail.from_dict(job_error_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


