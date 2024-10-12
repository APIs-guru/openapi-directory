# GetBlockIndexResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**block_hash** | **str** | Hash of the requested block | [optional] 

## Example

```python
from openapi_client.models.get_block_index_response import GetBlockIndexResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetBlockIndexResponse from a JSON string
get_block_index_response_instance = GetBlockIndexResponse.from_json(json)
# print the JSON string representation of the object
print(GetBlockIndexResponse.to_json())

# convert the object into a dict
get_block_index_response_dict = get_block_index_response_instance.to_dict()
# create an instance of GetBlockIndexResponse from a dict
get_block_index_response_from_dict = GetBlockIndexResponse.from_dict(get_block_index_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


