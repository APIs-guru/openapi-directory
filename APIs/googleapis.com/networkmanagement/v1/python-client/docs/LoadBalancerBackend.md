# LoadBalancerBackend

For display only. Metadata associated with a specific load balancer backend.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of a Compute Engine instance or network endpoint. | [optional] 
**health_check_allowing_firewall_rules** | **List[str]** | A list of firewall rule URIs allowing probes from health check IP ranges. | [optional] 
**health_check_blocking_firewall_rules** | **List[str]** | A list of firewall rule URIs blocking probes from health check IP ranges. | [optional] 
**health_check_firewall_state** | **str** | State of the health check firewall configuration. | [optional] 
**uri** | **str** | URI of a Compute Engine instance or network endpoint. | [optional] 

## Example

```python
from openapi_client.models.load_balancer_backend import LoadBalancerBackend

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancerBackend from a JSON string
load_balancer_backend_instance = LoadBalancerBackend.from_json(json)
# print the JSON string representation of the object
print(LoadBalancerBackend.to_json())

# convert the object into a dict
load_balancer_backend_dict = load_balancer_backend_instance.to_dict()
# create an instance of LoadBalancerBackend from a dict
load_balancer_backend_from_dict = LoadBalancerBackend.from_dict(load_balancer_backend_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


