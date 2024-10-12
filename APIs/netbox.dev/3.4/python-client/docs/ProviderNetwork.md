# ProviderNetwork


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
**provider** | [**NestedProvider**](NestedProvider.md) |  | 
**service_id** | **str** |  | [optional] 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.provider_network import ProviderNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderNetwork from a JSON string
provider_network_instance = ProviderNetwork.from_json(json)
# print the JSON string representation of the object
print(ProviderNetwork.to_json())

# convert the object into a dict
provider_network_dict = provider_network_instance.to_dict()
# create an instance of ProviderNetwork from a dict
provider_network_from_dict = ProviderNetwork.from_dict(provider_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


