# WorkloadsConfig

The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dag_processor** | [**DagProcessorResource**](DagProcessorResource.md) |  | [optional] 
**scheduler** | [**SchedulerResource**](SchedulerResource.md) |  | [optional] 
**triggerer** | [**TriggererResource**](TriggererResource.md) |  | [optional] 
**web_server** | [**WebServerResource**](WebServerResource.md) |  | [optional] 
**worker** | [**WorkerResource**](WorkerResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.workloads_config import WorkloadsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WorkloadsConfig from a JSON string
workloads_config_instance = WorkloadsConfig.from_json(json)
# print the JSON string representation of the object
print(WorkloadsConfig.to_json())

# convert the object into a dict
workloads_config_dict = workloads_config_instance.to_dict()
# create an instance of WorkloadsConfig from a dict
workloads_config_from_dict = WorkloadsConfig.from_dict(workloads_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


