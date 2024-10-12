# GetCallTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agora_app_id** | **str** |  | [optional] 
**agora_uid** | **int** |  | [optional] 
**duration** | **str** | Duration of the request in human-readable format | 
**token** | **str** |  | 

## Example

```python
from openapi_client.models.get_call_token_response import GetCallTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCallTokenResponse from a JSON string
get_call_token_response_instance = GetCallTokenResponse.from_json(json)
# print the JSON string representation of the object
print(GetCallTokenResponse.to_json())

# convert the object into a dict
get_call_token_response_dict = get_call_token_response_instance.to_dict()
# create an instance of GetCallTokenResponse from a dict
get_call_token_response_from_dict = GetCallTokenResponse.from_dict(get_call_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


