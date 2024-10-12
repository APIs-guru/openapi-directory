# ChainName

Name to be used when displaying the chain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name for this chain. | [optional] 
**language_code** | **str** | The BCP 47 code of language of the name. | [optional] 

## Example

```python
from openapi_client.models.chain_name import ChainName

# TODO update the JSON string below
json = "{}"
# create an instance of ChainName from a JSON string
chain_name_instance = ChainName.from_json(json)
# print the JSON string representation of the object
print(ChainName.to_json())

# convert the object into a dict
chain_name_dict = chain_name_instance.to_dict()
# create an instance of ChainName from a dict
chain_name_from_dict = ChainName.from_dict(chain_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


