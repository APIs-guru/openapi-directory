# ServiceLbPolicyFailoverConfig

Option to specify health based failover behavior. This is not related to Network load balancer FailoverPolicy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_health_threshold** | **int** | Optional. The percentage threshold that a load balancer will begin to send traffic to failover backends. If the percentage of endpoints in a MIG/NEG is smaller than this value, traffic would be sent to failover backends if possible. This field should be set to a value between 1 and 99. The default value is 50 for Global external HTTP(S) load balancer (classic) and Proxyless service mesh, and 70 for others. | [optional] 

## Example

```python
from openapi_client.models.service_lb_policy_failover_config import ServiceLbPolicyFailoverConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceLbPolicyFailoverConfig from a JSON string
service_lb_policy_failover_config_instance = ServiceLbPolicyFailoverConfig.from_json(json)
# print the JSON string representation of the object
print(ServiceLbPolicyFailoverConfig.to_json())

# convert the object into a dict
service_lb_policy_failover_config_dict = service_lb_policy_failover_config_instance.to_dict()
# create an instance of ServiceLbPolicyFailoverConfig from a dict
service_lb_policy_failover_config_from_dict = ServiceLbPolicyFailoverConfig.from_dict(service_lb_policy_failover_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


