# HyperVReplicaAzureFailbackProviderInput

HvrA provider specific input for failback.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_sync_option** | **str** | Data sync option. | [optional] 
**provider_id_for_alternate_recovery** | **str** | Provider ID for alternate location | [optional] 
**recovery_vm_creation_option** | **str** | ALR options to create alternate recovery. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_azure_failback_provider_input import HyperVReplicaAzureFailbackProviderInput

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaAzureFailbackProviderInput from a JSON string
hyper_v_replica_azure_failback_provider_input_instance = HyperVReplicaAzureFailbackProviderInput.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaAzureFailbackProviderInput.to_json())

# convert the object into a dict
hyper_v_replica_azure_failback_provider_input_dict = hyper_v_replica_azure_failback_provider_input_instance.to_dict()
# create an instance of HyperVReplicaAzureFailbackProviderInput from a dict
hyper_v_replica_azure_failback_provider_input_from_dict = HyperVReplicaAzureFailbackProviderInput.from_dict(hyper_v_replica_azure_failback_provider_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


