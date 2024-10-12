# JobMetadata

Job Operation metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | Output only. The job id. | [optional] [readonly] 
**operation_type** | **str** | Output only. Operation type. | [optional] [readonly] 
**start_time** | **str** | Output only. Job submission time. | [optional] [readonly] 
**status** | [**JobStatus**](JobStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.job_metadata import JobMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of JobMetadata from a JSON string
job_metadata_instance = JobMetadata.from_json(json)
# print the JSON string representation of the object
print(JobMetadata.to_json())

# convert the object into a dict
job_metadata_dict = job_metadata_instance.to_dict()
# create an instance of JobMetadata from a dict
job_metadata_from_dict = JobMetadata.from_dict(job_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


