# ChainUrl

Url to be used when displaying the chain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | The url for this chain. | [optional] 

## Example

```python
from openapi_client.models.chain_url import ChainUrl

# TODO update the JSON string below
json = "{}"
# create an instance of ChainUrl from a JSON string
chain_url_instance = ChainUrl.from_json(json)
# print the JSON string representation of the object
print(ChainUrl.to_json())

# convert the object into a dict
chain_url_dict = chain_url_instance.to_dict()
# create an instance of ChainUrl from a dict
chain_url_from_dict = ChainUrl.from_dict(chain_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


