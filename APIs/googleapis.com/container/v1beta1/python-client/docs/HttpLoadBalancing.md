# HttpLoadBalancing

Configuration options for the HTTP (L7) load balancing controller addon, which makes it easy to set up HTTP load balancers for services in a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disabled** | **bool** | Whether the HTTP Load Balancing controller is enabled in the cluster. When enabled, it runs a small pod in the cluster that manages the load balancers. | [optional] 

## Example

```python
from openapi_client.models.http_load_balancing import HttpLoadBalancing

# TODO update the JSON string below
json = "{}"
# create an instance of HttpLoadBalancing from a JSON string
http_load_balancing_instance = HttpLoadBalancing.from_json(json)
# print the JSON string representation of the object
print(HttpLoadBalancing.to_json())

# convert the object into a dict
http_load_balancing_dict = http_load_balancing_instance.to_dict()
# create an instance of HttpLoadBalancing from a dict
http_load_balancing_from_dict = HttpLoadBalancing.from_dict(http_load_balancing_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


