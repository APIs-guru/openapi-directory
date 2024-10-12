# GetTokenHoldersResponseHoldersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** |  | [optional] 
**amount** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.get_token_holders_response_holders_inner import GetTokenHoldersResponseHoldersInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetTokenHoldersResponseHoldersInner from a JSON string
get_token_holders_response_holders_inner_instance = GetTokenHoldersResponseHoldersInner.from_json(json)
# print the JSON string representation of the object
print(GetTokenHoldersResponseHoldersInner.to_json())

# convert the object into a dict
get_token_holders_response_holders_inner_dict = get_token_holders_response_holders_inner_instance.to_dict()
# create an instance of GetTokenHoldersResponseHoldersInner from a dict
get_token_holders_response_holders_inner_from_dict = GetTokenHoldersResponseHoldersInner.from_dict(get_token_holders_response_holders_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


