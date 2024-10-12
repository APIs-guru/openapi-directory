# LoadBalancerConfiguration

A load balancer configuration for an availability group listener.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**load_balancer_resource_id** | **str** | Resource id of the load balancer. | [optional] 
**private_ip_address** | [**PrivateIPAddress**](PrivateIPAddress.md) |  | [optional] 
**probe_port** | **int** | Probe port. | [optional] 
**public_ip_address_resource_id** | **str** | Resource id of the public IP. | [optional] 
**sql_virtual_machine_instances** | **List[str]** | List of the SQL virtual machine instance resource id&#39;s that are enrolled into the availability group listener. | [optional] 

## Example

```python
from openapi_client.models.load_balancer_configuration import LoadBalancerConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancerConfiguration from a JSON string
load_balancer_configuration_instance = LoadBalancerConfiguration.from_json(json)
# print the JSON string representation of the object
print(LoadBalancerConfiguration.to_json())

# convert the object into a dict
load_balancer_configuration_dict = load_balancer_configuration_instance.to_dict()
# create an instance of LoadBalancerConfiguration from a dict
load_balancer_configuration_from_dict = LoadBalancerConfiguration.from_dict(load_balancer_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


