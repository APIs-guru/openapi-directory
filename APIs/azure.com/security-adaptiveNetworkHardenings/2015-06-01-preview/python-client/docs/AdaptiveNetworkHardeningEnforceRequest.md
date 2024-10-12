# AdaptiveNetworkHardeningEnforceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**network_security_groups** | **List[str]** | The Azure resource IDs of the effective network security groups that will be updated with the created security rules from the Adaptive Network Hardening rules | 
**rules** | [**List[Rule]**](Rule.md) | The rules to enforce | 

## Example

```python
from openapi_client.models.adaptive_network_hardening_enforce_request import AdaptiveNetworkHardeningEnforceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveNetworkHardeningEnforceRequest from a JSON string
adaptive_network_hardening_enforce_request_instance = AdaptiveNetworkHardeningEnforceRequest.from_json(json)
# print the JSON string representation of the object
print(AdaptiveNetworkHardeningEnforceRequest.to_json())

# convert the object into a dict
adaptive_network_hardening_enforce_request_dict = adaptive_network_hardening_enforce_request_instance.to_dict()
# create an instance of AdaptiveNetworkHardeningEnforceRequest from a dict
adaptive_network_hardening_enforce_request_from_dict = AdaptiveNetworkHardeningEnforceRequest.from_dict(adaptive_network_hardening_enforce_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


