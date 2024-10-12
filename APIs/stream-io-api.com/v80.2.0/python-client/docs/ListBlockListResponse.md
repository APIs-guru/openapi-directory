# ListBlockListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocklists** | [**List[BlockList]**](BlockList.md) |  | 
**duration** | **str** | Duration of the request in human-readable format | 

## Example

```python
from openapi_client.models.list_block_list_response import ListBlockListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBlockListResponse from a JSON string
list_block_list_response_instance = ListBlockListResponse.from_json(json)
# print the JSON string representation of the object
print(ListBlockListResponse.to_json())

# convert the object into a dict
list_block_list_response_dict = list_block_list_response_instance.to_dict()
# create an instance of ListBlockListResponse from a dict
list_block_list_response_from_dict = ListBlockListResponse.from_dict(list_block_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


