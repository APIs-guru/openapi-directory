# ApiTokenDeleteResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique id (UUID) of the api token | 
**token_hash** | **str** | The hashed value of api token | 

## Example

```python
from openapi_client.models.api_token_delete_response import ApiTokenDeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApiTokenDeleteResponse from a JSON string
api_token_delete_response_instance = ApiTokenDeleteResponse.from_json(json)
# print the JSON string representation of the object
print(ApiTokenDeleteResponse.to_json())

# convert the object into a dict
api_token_delete_response_dict = api_token_delete_response_instance.to_dict()
# create an instance of ApiTokenDeleteResponse from a dict
api_token_delete_response_from_dict = ApiTokenDeleteResponse.from_dict(api_token_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


