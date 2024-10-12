# LoadBalancerListResult

Response for ListLoadBalancers Api service call

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets the URL to get the next set of results. | [optional] 
**value** | [**List[LoadBalancer]**](LoadBalancer.md) | Gets a list of LoadBalancers in a resource group | [optional] 

## Example

```python
from openapi_client.models.load_balancer_list_result import LoadBalancerListResult

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancerListResult from a JSON string
load_balancer_list_result_instance = LoadBalancerListResult.from_json(json)
# print the JSON string representation of the object
print(LoadBalancerListResult.to_json())

# convert the object into a dict
load_balancer_list_result_dict = load_balancer_list_result_instance.to_dict()
# create an instance of LoadBalancerListResult from a dict
load_balancer_list_result_from_dict = LoadBalancerListResult.from_dict(load_balancer_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


