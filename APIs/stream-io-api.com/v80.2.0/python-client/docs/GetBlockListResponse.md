# GetBlockListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocklist** | [**BlockList**](BlockList.md) |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.get_block_list_response import GetBlockListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetBlockListResponse from a JSON string
get_block_list_response_instance = GetBlockListResponse.from_json(json)
# print the JSON string representation of the object
print(GetBlockListResponse.to_json())

# convert the object into a dict
get_block_list_response_dict = get_block_list_response_instance.to_dict()
# create an instance of GetBlockListResponse from a dict
get_block_list_response_from_dict = GetBlockListResponse.from_dict(get_block_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


