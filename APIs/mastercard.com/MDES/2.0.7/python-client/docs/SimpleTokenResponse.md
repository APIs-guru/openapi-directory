# SimpleTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | [**SimpleTokenCommentResponse**](SimpleTokenCommentResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.simple_token_response import SimpleTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleTokenResponse from a JSON string
simple_token_response_instance = SimpleTokenResponse.from_json(json)
# print the JSON string representation of the object
print(SimpleTokenResponse.to_json())

# convert the object into a dict
simple_token_response_dict = simple_token_response_instance.to_dict()
# create an instance of SimpleTokenResponse from a dict
simple_token_response_from_dict = SimpleTokenResponse.from_dict(simple_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


