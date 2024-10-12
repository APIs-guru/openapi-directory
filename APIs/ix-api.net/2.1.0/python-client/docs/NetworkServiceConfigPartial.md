# NetworkServiceConfigPartial

Polymorphic Network Service Config

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asns** | **List[int]** |  | [optional] 
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**capacity** | **int** | The capacity of the service in Mbps. If set to Null, the maximum capacity will be used, i.e. the virtual circuit is not rate-limited.  An exchange may choose to constrain the available capacity range of a &#x60;ProductOffering&#x60;.  That means, the service can consume up to the total bandwidth of the &#x60;Connection&#x60;.  Typically the service is charged based on the capacity. | [optional] 
**charged_until** | **date** | Your obligation to pay for the service will end on this date. Typically &#x60;≥ decommission_at&#x60;.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**connection** | **str** | The id of the connection to use for this &#x60;NetworkServiceConfig&#x60;. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**decommission_at** | **date** | The service will be decommissioned on this date.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**id** | **str** |  | [optional] 
**ips** | **List[str]** | A list of ip-address IDs.  Allocation of IP Addresses might be deferred depending on the IXP implementation. No assumption should be made. | [optional] [readonly] 
**listed** | **bool** | The customer wants to be featured on the member list | [optional] 
**macs** | **List[str]** |  | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**network_feature_configs** | **List[str]** | A list of ids of &#x60;NetworkFeatureConfig&#x60;s.  | [optional] [readonly] 
**network_service** | **str** | The id of the configured network service. | [optional] 
**product_offering** | **str** | The product offering must match the type &#x60;exchange_lan&#x60; and must refer to the related network service through the &#x60;exchange_lan_network_service&#x60; property. | [optional] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**role_assignments** | **List[str]** | A set of &#x60;RoleAssignment&#x60;s. See the documentation on the specific &#x60;required_contact_roles&#x60;, &#x60;nfc_required_contact_roles&#x60; or &#x60;nsc_required_contact_roles&#x60; on what &#x60;RoleAssignment&#x60;s to provide.  | [optional] 
**state** | **str** |  | [optional] 
**status** | [**List[Status]**](Status.md) |  | [optional] 
**type** | **str** |  | 
**vlan_config** | [**VlanConfig**](VlanConfig.md) |  | [optional] 
**role** | **str** | A &#x60;leaf&#x60; can only reach roots and is isolated from other leafs. A &#x60;root&#x60; can reach any other point in the virtual circuit including other roots. | [optional] [default to 'leaf']
**cloud_vlan** | **int** | If the &#x60;provider_vlans&#x60; property of the &#x60;ProductOffering&#x60; is &#x60;multi&#x60;, a numeric value refers to a specific vlan on the service provider side.  Otherwise, if set to &#x60;null&#x60;, it refers to all unmatched vlan ids on the service provider side. (All vlan ids from the service provider side are presented as tags within any vlans specified in &#x60;vlan_config&#x60;.)  If the &#x60;provider_vlans&#x60; property of the &#x60;ProductOffering&#x60; is &#x60;single&#x60;, the &#x60;cloud_vlan&#x60; MUST be &#x60;null&#x60; or MUST NOT be provided. | [optional] 
**handover** | **int** | The handover enumerates the connection and is required for checking diversity constraints.  It must be within &#x60;1 &lt;&#x3D; x &lt;&#x3D; network_service.diversity&#x60;.  | [optional] 

## Example

```python
from openapi_client.models.network_service_config_partial import NetworkServiceConfigPartial

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkServiceConfigPartial from a JSON string
network_service_config_partial_instance = NetworkServiceConfigPartial.from_json(json)
# print the JSON string representation of the object
print(NetworkServiceConfigPartial.to_json())

# convert the object into a dict
network_service_config_partial_dict = network_service_config_partial_instance.to_dict()
# create an instance of NetworkServiceConfigPartial from a dict
network_service_config_partial_from_dict = NetworkServiceConfigPartial.from_dict(network_service_config_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


