# Probe

Probes have a number of fields that you can use to control their behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_exec** | [**ProbeExec**](ProbeExec.md) |  | [optional] 
**failure_threshold** | **int** | The count of failures after which probe is considered failed. | [optional] 
**http_get** | [**ProbeHttpGet**](ProbeHttpGet.md) |  | [optional] 
**initial_delay_seconds** | **int** | The initial delay in seconds to start executing probe once code package has started. | [optional] 
**period_seconds** | **int** | Periodic seconds to execute probe. | [optional] 
**success_threshold** | **int** | The count of successful probe executions after which probe is considered success. | [optional] 
**tcp_socket** | [**ProbeTcpSocket**](ProbeTcpSocket.md) |  | [optional] 
**timeout_seconds** | **int** | Period after which probe is considered as failed if it hasn&#39;t completed successfully. | [optional] 

## Example

```python
from openapi_client.models.probe import Probe

# TODO update the JSON string below
json = "{}"
# create an instance of Probe from a JSON string
probe_instance = Probe.from_json(json)
# print the JSON string representation of the object
print(Probe.to_json())

# convert the object into a dict
probe_dict = probe_instance.to_dict()
# create an instance of Probe from a dict
probe_from_dict = Probe.from_dict(probe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


