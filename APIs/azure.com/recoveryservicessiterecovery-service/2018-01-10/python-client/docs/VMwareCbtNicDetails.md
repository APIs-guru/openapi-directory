# VMwareCbtNicDetails

VMwareCbt NIC details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_primary_nic** | **str** | A value indicating whether this is the primary NIC. | [optional] 
**is_selected_for_migration** | **str** | A value indicating whether this NIC is selected for migration. | [optional] 
**nic_id** | **str** | The NIC Id. | [optional] [readonly] 
**source_ip_address** | **str** | The source IP address. | [optional] [readonly] 
**source_ip_address_type** | **str** | The source IP address type. | [optional] [readonly] 
**source_network_id** | **str** | Source network Id. | [optional] [readonly] 
**target_ip_address** | **str** | The target IP address. | [optional] 
**target_ip_address_type** | **str** | The target IP address type. | [optional] 
**target_subnet_name** | **str** | Target subnet name. | [optional] 

## Example

```python
from openapi_client.models.v_mware_cbt_nic_details import VMwareCbtNicDetails

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtNicDetails from a JSON string
v_mware_cbt_nic_details_instance = VMwareCbtNicDetails.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtNicDetails.to_json())

# convert the object into a dict
v_mware_cbt_nic_details_dict = v_mware_cbt_nic_details_instance.to_dict()
# create an instance of VMwareCbtNicDetails from a dict
v_mware_cbt_nic_details_from_dict = VMwareCbtNicDetails.from_dict(v_mware_cbt_nic_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


