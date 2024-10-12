# HyperVReplicaAzureFailoverProviderInput

HvrA provider specific input for failover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_kek_certificate_pfx** | **str** | Primary kek certificate pfx. | [optional] 
**recovery_point_id** | **str** | The recovery point id to be passed to failover to a particular recovery point. In case of latest recovery point, null should be passed. | [optional] 
**secondary_kek_certificate_pfx** | **str** | Secondary kek certificate pfx. | [optional] 
**vault_location** | **str** | Location of the vault. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_replica_azure_failover_provider_input import HyperVReplicaAzureFailoverProviderInput

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVReplicaAzureFailoverProviderInput from a JSON string
hyper_v_replica_azure_failover_provider_input_instance = HyperVReplicaAzureFailoverProviderInput.from_json(json)
# print the JSON string representation of the object
print(HyperVReplicaAzureFailoverProviderInput.to_json())

# convert the object into a dict
hyper_v_replica_azure_failover_provider_input_dict = hyper_v_replica_azure_failover_provider_input_instance.to_dict()
# create an instance of HyperVReplicaAzureFailoverProviderInput from a dict
hyper_v_replica_azure_failover_provider_input_from_dict = HyperVReplicaAzureFailoverProviderInput.from_dict(hyper_v_replica_azure_failover_provider_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


