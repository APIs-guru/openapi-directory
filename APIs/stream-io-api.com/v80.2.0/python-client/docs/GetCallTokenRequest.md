# GetCallTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user** | [**UserObjectRequest**](UserObjectRequest.md) |  | [optional] 
**user_id** | **str** | **Server-side only**. User ID which server acts upon | [optional] 

## Example

```python
from openapi_client.models.get_call_token_request import GetCallTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetCallTokenRequest from a JSON string
get_call_token_request_instance = GetCallTokenRequest.from_json(json)
# print the JSON string representation of the object
print(GetCallTokenRequest.to_json())

# convert the object into a dict
get_call_token_request_dict = get_call_token_request_instance.to_dict()
# create an instance of GetCallTokenRequest from a dict
get_call_token_request_from_dict = GetCallTokenRequest.from_dict(get_call_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


