# LookupEffectiveGuestPolicyRequest

A request message for getting the effective guest policy assigned to the instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**os_architecture** | **str** | Architecture of OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. | [optional] 
**os_short_name** | **str** | Short name of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that instance. | [optional] 
**os_version** | **str** | Version of the OS running on the instance. The OS Config agent only provides this field for targeting if OS Inventory is enabled for that VM instance. | [optional] 

## Example

```python
from openapi_client.models.lookup_effective_guest_policy_request import LookupEffectiveGuestPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LookupEffectiveGuestPolicyRequest from a JSON string
lookup_effective_guest_policy_request_instance = LookupEffectiveGuestPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(LookupEffectiveGuestPolicyRequest.to_json())

# convert the object into a dict
lookup_effective_guest_policy_request_dict = lookup_effective_guest_policy_request_instance.to_dict()
# create an instance of LookupEffectiveGuestPolicyRequest from a dict
lookup_effective_guest_policy_request_from_dict = LookupEffectiveGuestPolicyRequest.from_dict(lookup_effective_guest_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


