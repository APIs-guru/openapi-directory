# ProxyDto

Base data transfer object implementation for proxy resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource id of the azure resource | [optional] [readonly] 
**name** | **str** | Name of the azure resource | [optional] [readonly] 
**type** | **str** | Type of the azure resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.proxy_dto import ProxyDto

# TODO update the JSON string below
json = "{}"
# create an instance of ProxyDto from a JSON string
proxy_dto_instance = ProxyDto.from_json(json)
# print the JSON string representation of the object
print(ProxyDto.to_json())

# convert the object into a dict
proxy_dto_dict = proxy_dto_instance.to_dict()
# create an instance of ProxyDto from a dict
proxy_dto_from_dict = ProxyDto.from_dict(proxy_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


