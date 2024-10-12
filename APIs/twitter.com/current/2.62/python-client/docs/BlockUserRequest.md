# BlockUserRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target_user_id** | **str** | Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers. | 

## Example

```python
from openapi_client.models.block_user_request import BlockUserRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BlockUserRequest from a JSON string
block_user_request_instance = BlockUserRequest.from_json(json)
# print the JSON string representation of the object
print(BlockUserRequest.to_json())

# convert the object into a dict
block_user_request_dict = block_user_request_instance.to_dict()
# create an instance of BlockUserRequest from a dict
block_user_request_from_dict = BlockUserRequest.from_dict(block_user_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


