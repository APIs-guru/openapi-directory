# UpdateBlockListRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**words** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.update_block_list_request import UpdateBlockListRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBlockListRequest from a JSON string
update_block_list_request_instance = UpdateBlockListRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBlockListRequest.to_json())

# convert the object into a dict
update_block_list_request_dict = update_block_list_request_instance.to_dict()
# create an instance of UpdateBlockListRequest from a dict
update_block_list_request_from_dict = UpdateBlockListRequest.from_dict(update_block_list_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


