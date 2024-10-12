# Chain

A chain is a brand that your business's locations can be affiliated with.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain_names** | [**List[ChainName]**](ChainName.md) | Names of the chain. | [optional] 
**location_count** | **int** | Number of locations that are part of this chain. | [optional] 
**name** | **str** | Required. The chain&#39;s resource name, in the format &#x60;chains/{chain_id}&#x60;. | [optional] 
**websites** | [**List[ChainUri]**](ChainUri.md) | Websites of the chain. | [optional] 

## Example

```python
from openapi_client.models.chain import Chain

# TODO update the JSON string below
json = "{}"
# create an instance of Chain from a JSON string
chain_instance = Chain.from_json(json)
# print the JSON string representation of the object
print(Chain.to_json())

# convert the object into a dict
chain_dict = chain_instance.to_dict()
# create an instance of Chain from a dict
chain_from_dict = Chain.from_dict(chain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


