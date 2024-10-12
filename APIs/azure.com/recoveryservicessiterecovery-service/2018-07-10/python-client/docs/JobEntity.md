# JobEntity

This class contains the minimal job details required to navigate to the desired drill down.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_friendly_name** | **str** | The job display name. | [optional] 
**job_id** | **str** | The job id. | [optional] 
**job_scenario_name** | **str** | The job name. Enum type ScenarioName. | [optional] 
**target_instance_type** | **str** | The workflow affected object type. | [optional] 
**target_object_id** | **str** | The object id. | [optional] 
**target_object_name** | **str** | The object name. | [optional] 

## Example

```python
from openapi_client.models.job_entity import JobEntity

# TODO update the JSON string below
json = "{}"
# create an instance of JobEntity from a JSON string
job_entity_instance = JobEntity.from_json(json)
# print the JSON string representation of the object
print(JobEntity.to_json())

# convert the object into a dict
job_entity_dict = job_entity_instance.to_dict()
# create an instance of JobEntity from a dict
job_entity_from_dict = JobEntity.from_dict(job_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


