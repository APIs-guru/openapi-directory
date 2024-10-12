# WritableProviderNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**provider** | **int** |  | 
**service_id** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_provider_network import WritableProviderNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of WritableProviderNetwork from a JSON string
writable_provider_network_instance = WritableProviderNetwork.from_json(json)
# print the JSON string representation of the object
print(WritableProviderNetwork.to_json())

# convert the object into a dict
writable_provider_network_dict = writable_provider_network_instance.to_dict()
# create an instance of WritableProviderNetwork from a dict
writable_provider_network_from_dict = WritableProviderNetwork.from_dict(writable_provider_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


