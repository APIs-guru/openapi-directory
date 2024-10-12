# BackendAddressPool

Pool of backend IP addresses

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated | [optional] 
**name** | **str** | Gets name of the resource that is unique within a resource group. This name can be used to access the resource | [optional] 
**properties** | [**BackendAddressPoolPropertiesFormat**](BackendAddressPoolPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource Id | [optional] 

## Example

```python
from openapi_client.models.backend_address_pool import BackendAddressPool

# TODO update the JSON string below
json = "{}"
# create an instance of BackendAddressPool from a JSON string
backend_address_pool_instance = BackendAddressPool.from_json(json)
# print the JSON string representation of the object
print(BackendAddressPool.to_json())

# convert the object into a dict
backend_address_pool_dict = backend_address_pool_instance.to_dict()
# create an instance of BackendAddressPool from a dict
backend_address_pool_from_dict = BackendAddressPool.from_dict(backend_address_pool_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


