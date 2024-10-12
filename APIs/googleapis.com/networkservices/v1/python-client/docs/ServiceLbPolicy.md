# ServiceLbPolicy

ServiceLbPolicy holds global load balancing and traffic distribution configuration that can be applied to a BackendService.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_capacity_drain** | [**ServiceLbPolicyAutoCapacityDrain**](ServiceLbPolicyAutoCapacityDrain.md) |  | [optional] 
**create_time** | **str** | Output only. The timestamp when this resource was created. | [optional] [readonly] 
**description** | **str** | Optional. A free-text description of the resource. Max length 1024 characters. | [optional] 
**failover_config** | [**ServiceLbPolicyFailoverConfig**](ServiceLbPolicyFailoverConfig.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. Set of label tags associated with the ServiceLbPolicy resource. | [optional] 
**load_balancing_algorithm** | **str** | Optional. The type of load balancing algorithm to be used. The default behavior is WATERFALL_BY_REGION. | [optional] 
**name** | **str** | Required. Name of the ServiceLbPolicy resource. It matches pattern &#x60;projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}&#x60;. | [optional] 
**update_time** | **str** | Output only. The timestamp when this resource was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_lb_policy import ServiceLbPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceLbPolicy from a JSON string
service_lb_policy_instance = ServiceLbPolicy.from_json(json)
# print the JSON string representation of the object
print(ServiceLbPolicy.to_json())

# convert the object into a dict
service_lb_policy_dict = service_lb_policy_instance.to_dict()
# create an instance of ServiceLbPolicy from a dict
service_lb_policy_from_dict = ServiceLbPolicy.from_dict(service_lb_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


