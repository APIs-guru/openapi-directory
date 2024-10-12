# NestedProviderNetwork


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_provider_network import NestedProviderNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of NestedProviderNetwork from a JSON string
nested_provider_network_instance = NestedProviderNetwork.from_json(json)
# print the JSON string representation of the object
print(NestedProviderNetwork.to_json())

# convert the object into a dict
nested_provider_network_dict = nested_provider_network_instance.to_dict()
# create an instance of NestedProviderNetwork from a dict
nested_provider_network_from_dict = NestedProviderNetwork.from_dict(nested_provider_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


