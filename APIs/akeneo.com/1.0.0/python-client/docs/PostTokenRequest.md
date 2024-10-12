# PostTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grant_type** | **str** | Always equal to \&quot;password\&quot; | 
**password** | **str** | Your PIM password | 
**username** | **str** | Your PIM username | 

## Example

```python
from openapi_client.models.post_token_request import PostTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostTokenRequest from a JSON string
post_token_request_instance = PostTokenRequest.from_json(json)
# print the JSON string representation of the object
print(PostTokenRequest.to_json())

# convert the object into a dict
post_token_request_dict = post_token_request_instance.to_dict()
# create an instance of PostTokenRequest from a dict
post_token_request_from_dict = PostTokenRequest.from_dict(post_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


