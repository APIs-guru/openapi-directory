# PostTokensRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** |  | [default to True]
**channel** | **str** |  | 
**driver** | **str** |  | 
**physical_id** | **str** |  | 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.post_tokens_request import PostTokensRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostTokensRequest from a JSON string
post_tokens_request_instance = PostTokensRequest.from_json(json)
# print the JSON string representation of the object
print(PostTokensRequest.to_json())

# convert the object into a dict
post_tokens_request_dict = post_tokens_request_instance.to_dict()
# create an instance of PostTokensRequest from a dict
post_tokens_request_from_dict = PostTokensRequest.from_dict(post_tokens_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


