# LoadBalancerInfo

For display only. Metadata associated with a load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backend_type** | **str** | Type of load balancer&#39;s backend configuration. | [optional] 
**backend_uri** | **str** | Backend configuration URI. | [optional] 
**backends** | [**List[LoadBalancerBackend]**](LoadBalancerBackend.md) | Information for the loadbalancer backends. | [optional] 
**health_check_uri** | **str** | URI of the health check for the load balancer. Deprecated and no longer populated as different load balancer backends might have different health checks. | [optional] 
**load_balancer_type** | **str** | Type of the load balancer. | [optional] 

## Example

```python
from openapi_client.models.load_balancer_info import LoadBalancerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancerInfo from a JSON string
load_balancer_info_instance = LoadBalancerInfo.from_json(json)
# print the JSON string representation of the object
print(LoadBalancerInfo.to_json())

# convert the object into a dict
load_balancer_info_dict = load_balancer_info_instance.to_dict()
# create an instance of LoadBalancerInfo from a dict
load_balancer_info_from_dict = LoadBalancerInfo.from_dict(load_balancer_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


