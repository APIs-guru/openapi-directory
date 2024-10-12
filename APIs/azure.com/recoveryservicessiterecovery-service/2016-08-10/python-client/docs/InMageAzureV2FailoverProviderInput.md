# InMageAzureV2FailoverProviderInput

InMageAzureV2 provider specific input for failover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_point_id** | **str** | The recovery point id to be passed to failover to a particular recovery point. In case of latest recovery point, null should be passed. | [optional] 
**vault_location** | **str** | Location of the vault. | [optional] 

## Example

```python
from openapi_client.models.in_mage_azure_v2_failover_provider_input import InMageAzureV2FailoverProviderInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageAzureV2FailoverProviderInput from a JSON string
in_mage_azure_v2_failover_provider_input_instance = InMageAzureV2FailoverProviderInput.from_json(json)
# print the JSON string representation of the object
print(InMageAzureV2FailoverProviderInput.to_json())

# convert the object into a dict
in_mage_azure_v2_failover_provider_input_dict = in_mage_azure_v2_failover_provider_input_instance.to_dict()
# create an instance of InMageAzureV2FailoverProviderInput from a dict
in_mage_azure_v2_failover_provider_input_from_dict = InMageAzureV2FailoverProviderInput.from_dict(in_mage_azure_v2_failover_provider_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


