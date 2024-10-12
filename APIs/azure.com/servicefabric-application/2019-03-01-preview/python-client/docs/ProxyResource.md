# ProxyResource

The resource model definition for proxy-only resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Azure resource etag. | [optional] [readonly] 
**id** | **str** | Azure resource identifier. | [optional] [readonly] 
**location** | **str** | Azure resource location. | [optional] 
**name** | **str** | Azure resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Azure resource tags. | [optional] 
**type** | **str** | Azure resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.proxy_resource import ProxyResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProxyResource from a JSON string
proxy_resource_instance = ProxyResource.from_json(json)
# print the JSON string representation of the object
print(ProxyResource.to_json())

# convert the object into a dict
proxy_resource_dict = proxy_resource_instance.to_dict()
# create an instance of ProxyResource from a dict
proxy_resource_from_dict = ProxyResource.from_dict(proxy_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


