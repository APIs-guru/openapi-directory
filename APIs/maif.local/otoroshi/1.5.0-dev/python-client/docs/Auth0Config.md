# Auth0Config

Configuration for Auth0 domain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** | Auth0 callback URL | 
**client_id** | **str** | Auth0 client id | 
**client_secret** | **str** | Auth0 client secret | 
**domain** | **str** | Auth0 domain | 

## Example

```python
from openapi_client.models.auth0_config import Auth0Config

# TODO update the JSON string below
json = "{}"
# create an instance of Auth0Config from a JSON string
auth0_config_instance = Auth0Config.from_json(json)
# print the JSON string representation of the object
print(Auth0Config.to_json())

# convert the object into a dict
auth0_config_dict = auth0_config_instance.to_dict()
# create an instance of Auth0Config from a dict
auth0_config_from_dict = Auth0Config.from_dict(auth0_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


