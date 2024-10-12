# InMageFailoverProviderInput

Provider specific input for InMage failover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_point_id** | **str** | The recovery point id to be passed to failover to a particular recovery point. In case of latest recovery point, null should be passed. | [optional] 
**recovery_point_type** | **str** | The recovery point type. Values from LatestTime, LatestTag or Custom. In the case of custom, the recovery point provided by RecoveryPointId will be used. In the other two cases, recovery point id will be ignored. | [optional] 

## Example

```python
from openapi_client.models.in_mage_failover_provider_input import InMageFailoverProviderInput

# TODO update the JSON string below
json = "{}"
# create an instance of InMageFailoverProviderInput from a JSON string
in_mage_failover_provider_input_instance = InMageFailoverProviderInput.from_json(json)
# print the JSON string representation of the object
print(InMageFailoverProviderInput.to_json())

# convert the object into a dict
in_mage_failover_provider_input_dict = in_mage_failover_provider_input_instance.to_dict()
# create an instance of InMageFailoverProviderInput from a dict
in_mage_failover_provider_input_from_dict = InMageFailoverProviderInput.from_dict(in_mage_failover_provider_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


