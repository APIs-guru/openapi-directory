# MP2MPNetworkServiceConfigUpdatePartial

MP2MP Network Service Config Update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | [optional] 
**capacity** | **int** | The capacity of the service in Mbps. If set to Null, the maximum capacity will be used, i.e. the virtual circuit is not rate-limited.  An exchange may choose to constrain the available capacity range of a &#x60;ProductOffering&#x60;.  That means, the service can consume up to the total bandwidth of the &#x60;Connection&#x60;.  Typically the service is charged based on the capacity. | [optional] 
**connection** | **str** | The id of the connection to use for this &#x60;NetworkServiceConfig&#x60;. | [optional] 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | [optional] 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**macs** | **List[str]** |  | [optional] 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | [optional] 
**network_feature_configs** | **List[str]** | A list of ids of &#x60;NetworkFeatureConfig&#x60;s.  | [optional] [readonly] 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**role_assignments** | **List[str]** | A set of &#x60;RoleAssignment&#x60;s. See the documentation on the specific &#x60;required_contact_roles&#x60;, &#x60;nfc_required_contact_roles&#x60; or &#x60;nsc_required_contact_roles&#x60; on what &#x60;RoleAssignment&#x60;s to provide.  | [optional] 
**type** | **str** |  | 
**vlan_config** | [**VlanConfig**](VlanConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.mp2_mp_network_service_config_update_partial import MP2MPNetworkServiceConfigUpdatePartial

# TODO update the JSON string below
json = "{}"
# create an instance of MP2MPNetworkServiceConfigUpdatePartial from a JSON string
mp2_mp_network_service_config_update_partial_instance = MP2MPNetworkServiceConfigUpdatePartial.from_json(json)
# print the JSON string representation of the object
print(MP2MPNetworkServiceConfigUpdatePartial.to_json())

# convert the object into a dict
mp2_mp_network_service_config_update_partial_dict = mp2_mp_network_service_config_update_partial_instance.to_dict()
# create an instance of MP2MPNetworkServiceConfigUpdatePartial from a dict
mp2_mp_network_service_config_update_partial_from_dict = MP2MPNetworkServiceConfigUpdatePartial.from_dict(mp2_mp_network_service_config_update_partial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


