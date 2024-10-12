# VMwareCbtNicInput

VMwareCbt NIC input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_primary_nic** | **str** | A value indicating whether this is the primary NIC. | 
**is_selected_for_migration** | **str** | A value indicating whether this NIC is selected for migration. | [optional] 
**nic_id** | **str** | The NIC Id. | 
**target_static_ip_address** | **str** | The static IP address. | [optional] 
**target_subnet_name** | **str** | Target subnet name. | [optional] 

## Example

```python
from openapi_client.models.v_mware_cbt_nic_input import VMwareCbtNicInput

# TODO update the JSON string below
json = "{}"
# create an instance of VMwareCbtNicInput from a JSON string
v_mware_cbt_nic_input_instance = VMwareCbtNicInput.from_json(json)
# print the JSON string representation of the object
print(VMwareCbtNicInput.to_json())

# convert the object into a dict
v_mware_cbt_nic_input_dict = v_mware_cbt_nic_input_instance.to_dict()
# create an instance of VMwareCbtNicInput from a dict
v_mware_cbt_nic_input_from_dict = VMwareCbtNicInput.from_dict(v_mware_cbt_nic_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


