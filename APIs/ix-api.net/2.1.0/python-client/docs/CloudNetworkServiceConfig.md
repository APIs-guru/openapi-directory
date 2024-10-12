# CloudNetworkServiceConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | An account requires billing_information to be used as a &#x60;billing_account&#x60;. | 
**charged_until** | **date** | Your obligation to pay for the service will end on this date. Typically &#x60;≥ decommission_at&#x60;.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**cloud_vlan** | **int** | If the &#x60;provider_vlans&#x60; property of the &#x60;ProductOffering&#x60; is &#x60;multi&#x60;, a numeric value refers to a specific vlan on the service provider side.  Otherwise, if set to &#x60;null&#x60;, it refers to all unmatched vlan ids on the service provider side. (All vlan ids from the service provider side are presented as tags within any vlans specified in &#x60;vlan_config&#x60;.)  If the &#x60;provider_vlans&#x60; property of the &#x60;ProductOffering&#x60; is &#x60;single&#x60;, the &#x60;cloud_vlan&#x60; MUST be &#x60;null&#x60; or MUST NOT be provided. | 
**connection** | **str** | The id of the connection to use for this &#x60;NetworkServiceConfig&#x60;. | 
**consuming_account** | **str** | The &#x60;id&#x60; of the account consuming a service.  Used to be &#x60;owning_customer&#x60;.  | 
**contract_ref** | **str** | A reference to a contract. If no specific contract is used, a default MAY be chosen by the implementer.  | [optional] 
**decommission_at** | **date** | The service will be decommissioned on this date.  This field is only used when the state is &#x60;DECOMMISSION_REQUESTED&#x60; or &#x60;DECOMMISSIONED&#x60;. | [optional] 
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 
**handover** | **int** | The handover enumerates the connection and is required for checking diversity constraints.  It must be within &#x60;1 &lt;&#x3D; x &lt;&#x3D; network_service.diversity&#x60;.  | 
**id** | **str** |  | 
**managing_account** | **str** | The &#x60;id&#x60; of the account responsible for managing the service via the API. A manager can read and update the state of entities.  | 
**network_feature_configs** | **List[str]** | A list of ids of &#x60;NetworkFeatureConfig&#x60;s.  | [optional] [readonly] 
**network_service** | **str** | The id of the configured network service. | 
**purchase_order** | **str** | Purchase Order ID which will be displayed on the invoice.  | [optional] [default to '']
**role_assignments** | **List[str]** | A set of &#x60;RoleAssignment&#x60;s. See the documentation on the specific &#x60;required_contact_roles&#x60;, &#x60;nfc_required_contact_roles&#x60; or &#x60;nsc_required_contact_roles&#x60; on what &#x60;RoleAssignment&#x60;s to provide.  | 
**state** | **str** |  | 
**status** | [**List[Status]**](Status.md) |  | [optional] 
**type** | **str** |  | 
**vlan_config** | [**VlanConfig**](VlanConfig.md) |  | 

## Example

```python
from openapi_client.models.cloud_network_service_config import CloudNetworkServiceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of CloudNetworkServiceConfig from a JSON string
cloud_network_service_config_instance = CloudNetworkServiceConfig.from_json(json)
# print the JSON string representation of the object
print(CloudNetworkServiceConfig.to_json())

# convert the object into a dict
cloud_network_service_config_dict = cloud_network_service_config_instance.to_dict()
# create an instance of CloudNetworkServiceConfig from a dict
cloud_network_service_config_from_dict = CloudNetworkServiceConfig.from_dict(cloud_network_service_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


