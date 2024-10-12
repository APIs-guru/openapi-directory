# JobProperties

The properties of the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_point_in_time** | **datetime** | The time of the backup used for the failover. | [optional] 
**backup_type** | **str** | The backup type (CloudSnapshot | LocalSnapshot). Applicable only for backup jobs. | [optional] 
**data_stats** | [**DataStatistics**](DataStatistics.md) |  | [optional] 
**device_id** | **str** | The device ID in which the job ran. | [optional] 
**entity_label** | **str** | The entity identifier for which the job ran. | [optional] 
**entity_type** | **str** | The entity type for which the job ran. | [optional] 
**is_cancellable** | **bool** | Represents whether the job is cancellable or not. | [optional] 
**job_stages** | [**List[JobStage]**](JobStage.md) | The job stages. | [optional] 
**job_type** | **str** | The type of the job. | 
**source_device_id** | **str** | The source device ID of the failover job. | [optional] 

## Example

```python
from openapi_client.models.job_properties import JobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobProperties from a JSON string
job_properties_instance = JobProperties.from_json(json)
# print the JSON string representation of the object
print(JobProperties.to_json())

# convert the object into a dict
job_properties_dict = job_properties_instance.to_dict()
# create an instance of JobProperties from a dict
job_properties_from_dict = JobProperties.from_dict(job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


