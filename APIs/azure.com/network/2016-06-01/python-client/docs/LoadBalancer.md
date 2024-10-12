# LoadBalancer

LoadBalancer resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Gets a unique read-only string that changes whenever the resource is updated | [optional] 
**properties** | [**LoadBalancerPropertiesFormat**](LoadBalancerPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**location** | **str** | Resource location | [optional] 
**name** | **str** | Resource name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] [readonly] 

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


