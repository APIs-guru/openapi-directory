# NetworkFeatureConfigRequestPartial

Polymorphic Network Feature Config Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**as_set_v4** | **str** | AS-SET of the customer for IPv4 prefix filtering. This is used to generate filters on the router servers.  Only valid referenced prefixes within the AS-SET are allowed inbound to the route server. All other routes are filtered.  This field is *required* if the route server network feature only supports the &#x60;af_inet&#x60; address family. If multiple address families are supported, it is optional if the &#x60;as_set_v6&#x60; is provided.  Important: The format has to be: \&quot;AS-SET@IRR\&quot;. IRR is the database where the AS-SET is registred. Typically used IRR&#39;s are RADB, RIPE, NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC  | [optional] 
**as_set_v6** | **str** | AS-SET of the customer for IPv6. This is used to generate filters on the router servers. Only valid referenced prefixes within the AS-SET are allowed inbound to the route server. All other routes are filtered.  This field is *required* if the route server network feature only supports the &#x60;af_inet6&#x60; address family. If multiple address families are supported, it is optional if the &#x60;as_set_v4&#x60; is provided.  Important: The format has to be: \&quot;AS-SET@IRR\&quot;. IRR is the database where the AS-SET is registred. Typically used IRR&#39;s are RADB, RIPE, NTTCOM, APNIC, ALTDB, LEVEL3, ARIN, AFRINIC, LACNIC  | [optional] 
**asn** | **int** | The ASN of the peer.  | [optional] 
**bgp_session_type** | **str** | The session type describes which of the both parties will open the connection. If set to passive, the customer router needs to open the connection. If its set to active, the route server will open the connection. The standard behavior on most exchanges is passive.  | [optional] 
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**insert_ixp_asn** | **bool** | Insert the ASN of the exchange into the AS path. This function is only used in special cases. In 99% of all cases, it should be false.  | [optional] [default to True]
**ip** | **str** | The BGP session will be established from this IP address. Only IPs assigned to the corresponding network service config can be used. | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**max_prefix_v4** | **int** | Announcing more than &#x60;max_prefix&#x60; IPv4 prefixes the bgp session will be droped.  | [optional] 
**max_prefix_v6** | **int** | Announcing more than &#x60;max_prefix&#x60; IPv6 prefixes the bgp session will be droped.  | [optional] 
**network_feature** | **str** |  | [optional] 
**network_service_config** | **str** |  | [optional] 
**password** | **str** | The cleartext BGP session password | [optional] [default to '']
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**role_assignments** | **List[str]** | A set of &#x60;RoleAssignment&#x60;s. See the documentation on the specific &#x60;required_contact_roles&#x60;, &#x60;nfc_required_contact_roles&#x60; or &#x60;nsc_required_contact_roles&#x60; on what &#x60;RoleAssignment&#x60;s to provide.  | [optional] 
**session_mode** | **str** | Set the session mode with the routeserver.  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.network_feature_config_request_partial import NetworkFeatureConfigRequestPartial

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkFeatureConfigRequestPartial from a JSON string
network_feature_config_request_partial_instance = NetworkFeatureConfigRequestPartial.from_json(json)
# print the JSON string representation of the object
print(NetworkFeatureConfigRequestPartial.to_json())

# convert the object into a dict
network_feature_config_request_partial_dict = network_feature_config_request_partial_instance.to_dict()
# create an instance of NetworkFeatureConfigRequestPartial from a dict
network_feature_config_request_partial_from_dict = NetworkFeatureConfigRequestPartial.from_dict(network_feature_config_request_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


