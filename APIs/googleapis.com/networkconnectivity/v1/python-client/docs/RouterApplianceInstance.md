# RouterApplianceInstance

A router appliance instance is a Compute Engine virtual machine (VM) instance that acts as a BGP speaker. A router appliance instance is specified by the URI of the VM and the internal IP address of one of the VM's network interfaces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | The IP address on the VM to use for peering. | [optional] 
**virtual_machine** | **str** | The URI of the VM. | [optional] 

## Example

```python
from openapi_client.models.router_appliance_instance import RouterApplianceInstance

# TODO update the JSON string below
json = "{}"
# create an instance of RouterApplianceInstance from a JSON string
router_appliance_instance_instance = RouterApplianceInstance.from_json(json)
# print the JSON string representation of the object
print(RouterApplianceInstance.to_json())

# convert the object into a dict
router_appliance_instance_dict = router_appliance_instance_instance.to_dict()
# create an instance of RouterApplianceInstance from a dict
router_appliance_instance_from_dict = RouterApplianceInstance.from_dict(router_appliance_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


