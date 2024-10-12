# BgpSession

The properties that define a BGP session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_prefixes_advertised_v4** | **int** | The maximum number of prefixes advertised over the IPv4 session. | [optional] 
**max_prefixes_advertised_v6** | **int** | The maximum number of prefixes advertised over the IPv6 session. | [optional] 
**md5_authentication_key** | **str** | The MD5 authentication key of the session. | [optional] 
**microsoft_session_ipv4_address** | **str** | The IPv4 session address on Microsoft&#39;s end. | [optional] [readonly] 
**microsoft_session_ipv6_address** | **str** | The IPv6 session address on Microsoft&#39;s end. | [optional] [readonly] 
**peer_session_ipv4_address** | **str** | The IPv4 session address on peer&#39;s end. | [optional] 
**peer_session_ipv6_address** | **str** | The IPv6 session address on peer&#39;s end. | [optional] 
**session_prefix_v4** | **str** | The IPv4 prefix that contains both ends&#39; IPv4 addresses. | [optional] 
**session_prefix_v6** | **str** | The IPv6 prefix that contains both ends&#39; IPv6 addresses. | [optional] 
**session_state_v4** | **str** | The state of the IPv4 session. | [optional] [readonly] 
**session_state_v6** | **str** | The state of the IPv6 session. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bgp_session import BgpSession

# TODO update the JSON string below
json = "{}"
# create an instance of BgpSession from a JSON string
bgp_session_instance = BgpSession.from_json(json)
# print the JSON string representation of the object
print(BgpSession.to_json())

# convert the object into a dict
bgp_session_dict = bgp_session_instance.to_dict()
# create an instance of BgpSession from a dict
bgp_session_from_dict = BgpSession.from_dict(bgp_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


