# LoadBalancer

Representation of a load balancer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LoadBalancerProperty**](LoadBalancerProperty.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Region location of resource. | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.load_balancer import LoadBalancer

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancer from a JSON string
load_balancer_instance = LoadBalancer.from_json(json)
# print the JSON string representation of the object
print(LoadBalancer.to_json())

# convert the object into a dict
load_balancer_dict = load_balancer_instance.to_dict()
# create an instance of LoadBalancer from a dict
load_balancer_from_dict = LoadBalancer.from_dict(load_balancer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


