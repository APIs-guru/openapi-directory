# LoadBalancingRule

Rules of the load balancer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**LoadBalancingRulePropertiesFormat**](LoadBalancingRulePropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.load_balancing_rule import LoadBalancingRule

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancingRule from a JSON string
load_balancing_rule_instance = LoadBalancingRule.from_json(json)
# print the JSON string representation of the object
print(LoadBalancingRule.to_json())

# convert the object into a dict
load_balancing_rule_dict = load_balancing_rule_instance.to_dict()
# create an instance of LoadBalancingRule from a dict
load_balancing_rule_from_dict = LoadBalancingRule.from_dict(load_balancing_rule_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


