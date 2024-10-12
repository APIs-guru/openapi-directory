# LoadBalancerServer

The load balancer for sqlserver

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ip** | **str** | Output only. The IP address | [optional] [readonly] 
**vm** | **str** | Output only. The VM name | [optional] [readonly] 

## Example

```python
from openapi_client.models.load_balancer_server import LoadBalancerServer

# TODO update the JSON string below
json = "{}"
# create an instance of LoadBalancerServer from a JSON string
load_balancer_server_instance = LoadBalancerServer.from_json(json)
# print the JSON string representation of the object
print(LoadBalancerServer.to_json())

# convert the object into a dict
load_balancer_server_dict = load_balancer_server_instance.to_dict()
# create an instance of LoadBalancerServer from a dict
load_balancer_server_from_dict = LoadBalancerServer.from_dict(load_balancer_server_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


