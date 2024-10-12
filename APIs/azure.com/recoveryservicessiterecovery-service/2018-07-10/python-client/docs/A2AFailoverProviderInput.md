# A2AFailoverProviderInput

A2A provider specific input for failover.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_service_creation_option** | **str** | A value indicating whether to use recovery cloud service for TFO or not. | [optional] 
**recovery_point_id** | **str** | The recovery point id to be passed to failover to a particular recovery point. In case of latest recovery point, null should be passed. | [optional] 

## Example

```python
from openapi_client.models.a2_a_failover_provider_input import A2AFailoverProviderInput

# TODO update the JSON string below
json = "{}"
# create an instance of A2AFailoverProviderInput from a JSON string
a2_a_failover_provider_input_instance = A2AFailoverProviderInput.from_json(json)
# print the JSON string representation of the object
print(A2AFailoverProviderInput.to_json())

# convert the object into a dict
a2_a_failover_provider_input_dict = a2_a_failover_provider_input_instance.to_dict()
# create an instance of A2AFailoverProviderInput from a dict
a2_a_failover_provider_input_from_dict = A2AFailoverProviderInput.from_dict(a2_a_failover_provider_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


