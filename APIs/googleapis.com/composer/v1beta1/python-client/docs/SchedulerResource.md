# SchedulerResource

Configuration for resources used by Airflow schedulers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Optional. The number of schedulers. | [optional] 
**cpu** | **float** | Optional. CPU request and limit for a single Airflow scheduler replica. | [optional] 
**memory_gb** | **float** | Optional. Memory (GB) request and limit for a single Airflow scheduler replica. | [optional] 
**storage_gb** | **float** | Optional. Storage (GB) request and limit for a single Airflow scheduler replica. | [optional] 

## Example

```python
from openapi_client.models.scheduler_resource import SchedulerResource

# TODO update the JSON string below
json = "{}"
# create an instance of SchedulerResource from a JSON string
scheduler_resource_instance = SchedulerResource.from_json(json)
# print the JSON string representation of the object
print(SchedulerResource.to_json())

# convert the object into a dict
scheduler_resource_dict = scheduler_resource_instance.to_dict()
# create an instance of SchedulerResource from a dict
scheduler_resource_from_dict = SchedulerResource.from_dict(scheduler_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


