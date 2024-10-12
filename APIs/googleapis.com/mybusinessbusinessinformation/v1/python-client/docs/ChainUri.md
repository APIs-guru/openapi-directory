# ChainUri

Url to be used when displaying the chain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | The uri for this chain. | [optional] 

## Example

```python
from openapi_client.models.chain_uri import ChainUri

# TODO update the JSON string below
json = "{}"
# create an instance of ChainUri from a JSON string
chain_uri_instance = ChainUri.from_json(json)
# print the JSON string representation of the object
print(ChainUri.to_json())

# convert the object into a dict
chain_uri_dict = chain_uri_instance.to_dict()
# create an instance of ChainUri from a dict
chain_uri_from_dict = ChainUri.from_dict(chain_uri_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


