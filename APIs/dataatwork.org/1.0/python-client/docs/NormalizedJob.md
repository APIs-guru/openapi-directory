# NormalizedJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_uuid** | **str** | Universal Unique Identifier for the canonical job title | [optional] 
**relevance_score** | **str** | Relevance score for job title. | [optional] 
**title** | **str** | Job title for the synonymous job title | [optional] 
**uuid** | **str** | Universally Unique Identifier for the synonymous job title | [optional] 

## Example

```python
from openapi_client.models.normalized_job import NormalizedJob

# TODO update the JSON string below
json = "{}"
# create an instance of NormalizedJob from a JSON string
normalized_job_instance = NormalizedJob.from_json(json)
# print the JSON string representation of the object
print(NormalizedJob.to_json())

# convert the object into a dict
normalized_job_dict = normalized_job_instance.to_dict()
# create an instance of NormalizedJob from a dict
normalized_job_from_dict = NormalizedJob.from_dict(normalized_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


