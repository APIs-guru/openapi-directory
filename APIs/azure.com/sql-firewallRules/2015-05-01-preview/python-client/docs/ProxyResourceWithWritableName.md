# ProxyResourceWithWritableName

ARM proxy resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.proxy_resource_with_writable_name import ProxyResourceWithWritableName

# TODO update the JSON string below
json = "{}"
# create an instance of ProxyResourceWithWritableName from a JSON string
proxy_resource_with_writable_name_instance = ProxyResourceWithWritableName.from_json(json)
# print the JSON string representation of the object
print(ProxyResourceWithWritableName.to_json())

# convert the object into a dict
proxy_resource_with_writable_name_dict = proxy_resource_with_writable_name_instance.to_dict()
# create an instance of ProxyResourceWithWritableName from a dict
proxy_resource_with_writable_name_from_dict = ProxyResourceWithWritableName.from_dict(proxy_resource_with_writable_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


