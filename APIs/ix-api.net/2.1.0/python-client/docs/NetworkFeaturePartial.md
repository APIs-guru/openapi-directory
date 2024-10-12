# NetworkFeaturePartial

Polymorphic Network Feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_families** | **List[str]** | When creating a route server feature config, remember to specify which address family or families to use:  If the route server network feature only supports &#x60;af_inet&#x60;, then the &#x60;as_set_v4&#x60; in the network feature config is required.  If only &#x60;af_inet6&#x60; is supported, then the &#x60;as_set_v6&#x60; is required.  If both &#x60;af_inet&#x60; and &#x60;af_inet6&#x60; are supported, either &#x60;as_set_v4&#x60; or &#x60;as_set_v6&#x60; is required, but both can be provided in the network service config.  | [optional] 
**asn** | **int** |  | [optional] 
**available_bgp_session_types** | **List[str]** | The route server provides the following session modes.  | [optional] 
**flags** | [**List[IXPSpecificFeatureFlag]**](IXPSpecificFeatureFlag.md) | A list of IXP specific feature flags. This can be used to see if e.g. RPKI hard filtering is available. | [optional] 
**fqdn** | **str** | The FQDN of the route server.  | [optional] 
**id** | **str** |  | [optional] 
**ip_v4** | **str** | IPv4 address in [dot-decimal notation](https://en.wikipedia.org/wiki/Dot-decimal_notation) notation.  | [optional] 
**ip_v6** | **str** | IPv6 address in hexadecimal colon separated notation.  | [optional] 
**looking_glass_url** | **str** | The url of the looking glass.  | [optional] 
**name** | **str** |  | [optional] 
**network_service** | **str** |  | [optional] 
**nfc_required_contact_roles** | **List[str]** | The configuration will require at least one of each of the specified roles assigned to contacts.  The role assignments is associated with the network feature config through the &#x60;role_assignments&#x60; list property. | [optional] [readonly] 
**required** | **bool** |  | [optional] 
**session_mode** | **str** | When creating a route server feature config, remember to specify the same session_mode as the route server.  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.network_feature_partial import NetworkFeaturePartial

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkFeaturePartial from a JSON string
network_feature_partial_instance = NetworkFeaturePartial.from_json(json)
# print the JSON string representation of the object
print(NetworkFeaturePartial.to_json())

# convert the object into a dict
network_feature_partial_dict = network_feature_partial_instance.to_dict()
# create an instance of NetworkFeaturePartial from a dict
network_feature_partial_from_dict = NetworkFeaturePartial.from_dict(network_feature_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


