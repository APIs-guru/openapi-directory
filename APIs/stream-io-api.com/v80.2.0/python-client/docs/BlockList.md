# BlockList

Block list contains restricted words

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Date/time of creation | [optional] 
**name** | **str** | Block list name | 
**updated_at** | **datetime** | Date/time of the last update | [optional] 
**words** | **List[str]** | List of words to block | 

## Example

```python
from openapi_client.models.block_list import BlockList

# TODO update the JSON string below
json = "{}"
# create an instance of BlockList from a JSON string
block_list_instance = BlockList.from_json(json)
# print the JSON string representation of the object
print(BlockList.to_json())

# convert the object into a dict
block_list_dict = block_list_instance.to_dict()
# create an instance of BlockList from a dict
block_list_from_dict = BlockList.from_dict(block_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


