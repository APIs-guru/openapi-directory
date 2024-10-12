# LoadBalancerList

Pageable list of load balancers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[LoadBalancer]**](LoadBalancer.md) | List of load balancers for this page. | [optional] 

## Example

```python
from openapi_client.models.load_balancer_list import LoadBalancerList

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancerList from a JSON string
load_balancer_list_instance = LoadBalancerList.from_json(json)
# print the JSON string representation of the object
print(LoadBalancerList.to_json())

# convert the object into a dict
load_balancer_list_dict = load_balancer_list_instance.to_dict()
# create an instance of LoadBalancerList from a dict
load_balancer_list_from_dict = LoadBalancerList.from_dict(load_balancer_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


