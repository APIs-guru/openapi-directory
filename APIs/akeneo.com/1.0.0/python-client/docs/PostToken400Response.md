# PostToken400Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** | HTTP status code | [optional] 
**message** | **str** | Message explaining the error | [optional] 

## Example

```python
from openapi_client.models.post_token400_response import PostToken400Response

# TODO update the JSON string below
json = "{}"
# create an instance of PostToken400Response from a JSON string
post_token400_response_instance = PostToken400Response.from_json(json)
# print the JSON string representation of the object
print(PostToken400Response.to_json())

# convert the object into a dict
post_token400_response_dict = post_token400_response_instance.to_dict()
# create an instance of PostToken400Response from a dict
post_token400_response_from_dict = PostToken400Response.from_dict(post_token400_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


