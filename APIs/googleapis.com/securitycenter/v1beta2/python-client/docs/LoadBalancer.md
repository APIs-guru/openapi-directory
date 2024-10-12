# LoadBalancer

Contains information related to the load balancer associated with the finding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the load balancer associated with the finding. | [optional] 

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


