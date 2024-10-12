# ContainerProbe

The container probe, for liveness or readiness

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_exec** | [**ContainerExec**](ContainerExec.md) |  | [optional] 
**failure_threshold** | **int** | The failure threshold. | [optional] 
**http_get** | [**ContainerHttpGet**](ContainerHttpGet.md) |  | [optional] 
**initial_delay_seconds** | **int** | The initial delay seconds. | [optional] 
**period_seconds** | **int** | The period seconds. | [optional] 
**success_threshold** | **int** | The success threshold. | [optional] 
**timeout_seconds** | **int** | The timeout seconds. | [optional] 

## Example

```python
from openapi_client.models.container_probe import ContainerProbe

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerProbe from a JSON string
container_probe_instance = ContainerProbe.from_json(json)
# print the JSON string representation of the object
print(ContainerProbe.to_json())

# convert the object into a dict
container_probe_dict = container_probe_instance.to_dict()
# create an instance of ContainerProbe from a dict
container_probe_from_dict = ContainerProbe.from_dict(container_probe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


