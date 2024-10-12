# ProxyOnlyResource

The base model for the proxy-only Azure resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The fully qualified type of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.proxy_only_resource import ProxyOnlyResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProxyOnlyResource from a JSON string
proxy_only_resource_instance = ProxyOnlyResource.from_json(json)
# print the JSON string representation of the object
print(ProxyOnlyResource.to_json())

# convert the object into a dict
proxy_only_resource_dict = proxy_only_resource_instance.to_dict()
# create an instance of ProxyOnlyResource from a dict
proxy_only_resource_from_dict = ProxyOnlyResource.from_dict(proxy_only_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


