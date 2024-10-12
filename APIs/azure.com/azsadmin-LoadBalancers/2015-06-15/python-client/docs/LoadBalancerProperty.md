# LoadBalancerProperty

Properties of a load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**public_ip_addresses** | **List[str]** | List of public IP addresses. | [optional] 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 
**subscription_id** | **str** | The subscription ID. | [optional] [readonly] 
**tenant_resource_uri** | **str** | The tenant resource URI. | [optional] [readonly] 

## Example

```python
from openapi_client.models.load_balancer_property import LoadBalancerProperty

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancerProperty from a JSON string
load_balancer_property_instance = LoadBalancerProperty.from_json(json)
# print the JSON string representation of the object
print(LoadBalancerProperty.to_json())

# convert the object into a dict
load_balancer_property_dict = load_balancer_property_instance.to_dict()
# create an instance of LoadBalancerProperty from a dict
load_balancer_property_from_dict = LoadBalancerProperty.from_dict(load_balancer_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


