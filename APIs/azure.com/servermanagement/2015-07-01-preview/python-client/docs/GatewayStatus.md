# GatewayStatus

Expanded gateway status information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_memory_m_byte** | **float** | The available memory on the gateway host machine in megabytes. | [optional] 
**friendly_os_name** | **str** | The Plaintext description of the OS on the gateway. | [optional] 
**gateway_cpu_utilization_percent** | **float** | The CPU utilization of the gateway process (numeric value between 0 and 100). | [optional] 
**gateway_id** | **str** | The gateway resource ID. | [optional] 
**gateway_version** | **str** | The version of the gateway that is installed on the system. | [optional] 
**gateway_working_set_m_byte** | **float** | The working set size of the gateway process in megabytes. | [optional] 
**installed_date** | **datetime** | The date the gateway was installed. | [optional] 
**logical_processor_count** | **int** | Number of logical processors in the gateway system. | [optional] 
**name** | **str** | The computer name of the gateway system. | [optional] 
**status_updated** | **datetime** | UTC date and time when gateway status was last updated. | [optional] 
**total_cpu_utilization_percent** | **float** | CPU Utilization of the whole system. | [optional] 

## Example

```python
from openapi_client.models.gateway_status import GatewayStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GatewayStatus from a JSON string
gateway_status_instance = GatewayStatus.from_json(json)
# print the JSON string representation of the object
print(GatewayStatus.to_json())

# convert the object into a dict
gateway_status_dict = gateway_status_instance.to_dict()
# create an instance of GatewayStatus from a dict
gateway_status_from_dict = GatewayStatus.from_dict(gateway_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


