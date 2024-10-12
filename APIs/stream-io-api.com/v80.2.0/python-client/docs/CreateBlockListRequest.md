# CreateBlockListRequest

Block list contains restricted words

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Block list name | 
**words** | **List[str]** | List of words to block | 

## Example

```python
from openapi_client.models.create_block_list_request import CreateBlockListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBlockListRequest from a JSON string
create_block_list_request_instance = CreateBlockListRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBlockListRequest.to_json())

# convert the object into a dict
create_block_list_request_dict = create_block_list_request_instance.to_dict()
# create an instance of CreateBlockListRequest from a dict
create_block_list_request_from_dict = CreateBlockListRequest.from_dict(create_block_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


