# TykOauthClientsCreatePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_id** | **str** |  | [optional] 
**redirect_uri** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tyk_oauth_clients_create_post_request import TykOauthClientsCreatePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TykOauthClientsCreatePostRequest from a JSON string
tyk_oauth_clients_create_post_request_instance = TykOauthClientsCreatePostRequest.from_json(json)
# print the JSON string representation of the object
print(TykOauthClientsCreatePostRequest.to_json())

# convert the object into a dict
tyk_oauth_clients_create_post_request_dict = tyk_oauth_clients_create_post_request_instance.to_dict()
# create an instance of TykOauthClientsCreatePostRequest from a dict
tyk_oauth_clients_create_post_request_from_dict = TykOauthClientsCreatePostRequest.from_dict(tyk_oauth_clients_create_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


