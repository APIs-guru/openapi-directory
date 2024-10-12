# RouterApplianceInstance

RouterAppliance represents a Router appliance which is specified by a VM URI and a NIC address.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip_address** | **str** | The IP address of the network interface to use for peering. | [optional] 
**network_interface** | **str** |  | [optional] 
**virtual_machine** | **str** | The URI of the virtual machine resource | [optional] 

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


