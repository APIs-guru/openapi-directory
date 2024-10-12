# RevokeAnAccessTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**client_secret** | **str** |  | [optional] 
**token** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.revoke_an_access_token_request import RevokeAnAccessTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RevokeAnAccessTokenRequest from a JSON string
revoke_an_access_token_request_instance = RevokeAnAccessTokenRequest.from_json(json)
# print the JSON string representation of the object
print(RevokeAnAccessTokenRequest.to_json())

# convert the object into a dict
revoke_an_access_token_request_dict = revoke_an_access_token_request_instance.to_dict()
# create an instance of RevokeAnAccessTokenRequest from a dict
revoke_an_access_token_request_from_dict = RevokeAnAccessTokenRequest.from_dict(revoke_an_access_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


