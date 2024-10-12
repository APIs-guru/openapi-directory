# ProxyResource

The Resource model definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

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


