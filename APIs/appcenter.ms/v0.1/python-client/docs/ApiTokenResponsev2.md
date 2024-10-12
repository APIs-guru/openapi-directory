# ApiTokenResponsev2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | The creation time | 
**description** | **str** | The description of the token | [optional] 
**encrypted_token** | **str** | The encrypted value of a token. This value will only be returned for token of type in_app_update. | [optional] 
**id** | **str** | The unique id (UUID) of the api token | 
**scope** | **List[str]** | The token&#39;s scope. A list of allowed roles. | [optional] 

## Example

```python
from openapi_client.models.api_token_responsev2 import ApiTokenResponsev2

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokenResponsev2 from a JSON string
api_token_responsev2_instance = ApiTokenResponsev2.from_json(json)
# print the JSON string representation of the object
print(ApiTokenResponsev2.to_json())

# convert the object into a dict
api_token_responsev2_dict = api_token_responsev2_instance.to_dict()
# create an instance of ApiTokenResponsev2 from a dict
api_token_responsev2_from_dict = ApiTokenResponsev2.from_dict(api_token_responsev2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


