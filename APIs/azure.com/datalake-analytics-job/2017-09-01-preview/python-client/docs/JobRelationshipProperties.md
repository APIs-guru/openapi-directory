# JobRelationshipProperties

Job relationship information properties including pipeline information, correlation information, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pipeline_id** | **str** | The job relationship pipeline identifier (a GUID). | [optional] 
**pipeline_name** | **str** | The friendly name of the job relationship pipeline, which does not need to be unique. | [optional] 
**pipeline_uri** | **str** | The pipeline uri, unique, links to the originating service for this pipeline. | [optional] 
**recurrence_id** | **str** | The recurrence identifier (a GUID), unique per activity/script, regardless of iterations. This is something to link different occurrences of the same job together. | 
**recurrence_name** | **str** | The recurrence name, user friendly name for the correlation between jobs. | [optional] 
**run_id** | **str** | The run identifier (a GUID), unique identifier of the iteration of this pipeline. | [optional] 

## Example

```python
from openapi_client.models.job_relationship_properties import JobRelationshipProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobRelationshipProperties from a JSON string
job_relationship_properties_instance = JobRelationshipProperties.from_json(json)
# print the JSON string representation of the object
print(JobRelationshipProperties.to_json())

# convert the object into a dict
job_relationship_properties_dict = job_relationship_properties_instance.to_dict()
# create an instance of JobRelationshipProperties from a dict
job_relationship_properties_from_dict = JobRelationshipProperties.from_dict(job_relationship_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


