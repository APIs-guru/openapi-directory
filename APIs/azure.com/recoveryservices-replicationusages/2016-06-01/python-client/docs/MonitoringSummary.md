# MonitoringSummary

Summary of the replication monitoring data for this vault.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deprecated_provider_count** | **int** | Count of all deprecated recovery service providers. | [optional] 
**events_count** | **int** | Count of all critical warnings. | [optional] 
**supported_provider_count** | **int** | Count of all the supported recovery service providers. | [optional] 
**un_healthy_provider_count** | **int** | Count of unhealthy replication providers. | [optional] 
**un_healthy_vm_count** | **int** | Count of unhealthy VMs. | [optional] 
**unsupported_provider_count** | **int** | Count of all the unsupported recovery service providers. | [optional] 

## Example

```python
from openapi_client.models.monitoring_summary import MonitoringSummary

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringSummary from a JSON string
monitoring_summary_instance = MonitoringSummary.from_json(json)
# print the JSON string representation of the object
print(MonitoringSummary.to_json())

# convert the object into a dict
monitoring_summary_dict = monitoring_summary_instance.to_dict()
# create an instance of MonitoringSummary from a dict
monitoring_summary_from_dict = MonitoringSummary.from_dict(monitoring_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


