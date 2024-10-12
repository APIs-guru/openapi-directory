# Trust

Represents a relationship between two domains which makes it possible for users in one domain to be authenticated by a dc in another domain. Refer https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc731335(v%3dws.10) If the trust is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time the instance was created. | [optional] 
**last_known_trust_connected_heartbeat_time** | **str** | Output only. The last heartbeat time when the trust was known to be connected. | [optional] 
**selective_authentication** | **bool** | The trust authentication type which decides whether the trusted side has forest/domain wide access or selective access to approved set of resources. | [optional] 
**state** | **str** | Output only. The current state of this trust. | [optional] 
**state_description** | **str** | Output only. Additional information about the current state of this trust, if available. | [optional] 
**target_dns_ip_addresses** | **List[str]** | The target dns server ip addresses which can resolve the remote domain involved in trust. | [optional] 
**target_domain_name** | **str** | The fully qualified target domain name which will be in trust with current domain. | [optional] 
**trust_direction** | **str** | The trust direction decides the current domain is trusted, trusting or both. | [optional] 
**trust_handshake_secret** | **str** | Input only, and will not be stored. The trust secret used for handshake with target domain. | [optional] 
**trust_type** | **str** | The type of trust represented by the trust resource. | [optional] 
**update_time** | **str** | Output only. Last update time. | [optional] 

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


