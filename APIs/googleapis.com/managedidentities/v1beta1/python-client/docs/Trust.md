# Trust

Represents a relationship between two domains. This allows a controller in one domain to authenticate a user in another domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the instance was created. | [optional] [readonly] 
**last_trust_heartbeat_time** | **str** | Output only. The last heartbeat time when the trust was known to be connected. | [optional] [readonly] 
**selective_authentication** | **bool** | The trust authentication type, which decides whether the trusted side has forest/domain wide access or selective access to an approved set of resources. | [optional] 
**state** | **str** | Output only. The current state of the trust. | [optional] [readonly] 
**state_description** | **str** | Output only. Additional information about the current state of the trust, if available. | [optional] [readonly] 
**target_dns_ip_addresses** | **List[str]** | The target DNS server IP addresses which can resolve the remote domain involved in the trust. | [optional] 
**target_domain_name** | **str** | The fully qualified target domain name which will be in trust with the current domain. | [optional] 
**trust_direction** | **str** | The trust direction, which decides if the current domain is trusted, trusting, or both. | [optional] 
**trust_handshake_secret** | **str** | Input only. The trust secret used for the handshake with the target domain. It will not be stored. | [optional] 
**trust_type** | **str** | The type of trust represented by the trust resource. | [optional] 
**update_time** | **str** | Output only. The last update time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.trust import Trust

# TODO update the JSON string below
json = "{}"
# create an instance of Trust from a JSON string
trust_instance = Trust.from_json(json)
# print the JSON string representation of the object
print(Trust.to_json())

# convert the object into a dict
trust_dict = trust_instance.to_dict()
# create an instance of Trust from a dict
trust_from_dict = Trust.from_dict(trust_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


