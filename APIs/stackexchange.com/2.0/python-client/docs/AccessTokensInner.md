# AccessTokensInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** |  | [optional] 
**account_id** | **int** |  | [optional] 
**expires_on_date** | **int** |  | [optional] 
**scope** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.access_tokens_inner import AccessTokensInner

# TODO update the JSON string below
json = "{}"
# create an instance of AccessTokensInner from a JSON string
access_tokens_inner_instance = AccessTokensInner.from_json(json)
# print the JSON string representation of the object
print(AccessTokensInner.to_json())

# convert the object into a dict
access_tokens_inner_dict = access_tokens_inner_instance.to_dict()
# create an instance of AccessTokensInner from a dict
access_tokens_inner_from_dict = AccessTokensInner.from_dict(access_tokens_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


