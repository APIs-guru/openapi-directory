# ServiceLbPolicyAutoCapacityDrain

Option to specify if an unhealthy IG/NEG should be considered for global load balancing and traffic routing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **bool** | Optional. If set to &#39;True&#39;, an unhealthy IG/NEG will be set as drained. - An IG/NEG is considered unhealthy if less than 25% of the instances/endpoints in the IG/NEG are healthy. - This option will never result in draining more than 50% of the configured IGs/NEGs for the Backend Service. | [optional] 

## Example

```python
from openapi_client.models.service_lb_policy_auto_capacity_drain import ServiceLbPolicyAutoCapacityDrain

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceLbPolicyAutoCapacityDrain from a JSON string
service_lb_policy_auto_capacity_drain_instance = ServiceLbPolicyAutoCapacityDrain.from_json(json)
# print the JSON string representation of the object
print(ServiceLbPolicyAutoCapacityDrain.to_json())

# convert the object into a dict
service_lb_policy_auto_capacity_drain_dict = service_lb_policy_auto_capacity_drain_instance.to_dict()
# create an instance of ServiceLbPolicyAutoCapacityDrain from a dict
service_lb_policy_auto_capacity_drain_from_dict = ServiceLbPolicyAutoCapacityDrain.from_dict(service_lb_policy_auto_capacity_drain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


