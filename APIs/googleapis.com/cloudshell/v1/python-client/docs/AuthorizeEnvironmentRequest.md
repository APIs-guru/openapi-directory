# AuthorizeEnvironmentRequest

Request message for AuthorizeEnvironment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The OAuth access token that should be sent to the environment. | [optional] 
**expire_time** | **str** | The time when the credentials expire. If not set, defaults to one hour from when the server received the request. | [optional] 
**id_token** | **str** | The OAuth ID token that should be sent to the environment. | [optional] 

## Example

```python
from openapi_client.models.authorize_environment_request import AuthorizeEnvironmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizeEnvironmentRequest from a JSON string
authorize_environment_request_instance = AuthorizeEnvironmentRequest.from_json(json)
# print the JSON string representation of the object
print(AuthorizeEnvironmentRequest.to_json())

# convert the object into a dict
authorize_environment_request_dict = authorize_environment_request_instance.to_dict()
# create an instance of AuthorizeEnvironmentRequest from a dict
authorize_environment_request_from_dict = AuthorizeEnvironmentRequest.from_dict(authorize_environment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


