# AppRepoResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** | The unique id (UUID) of the app that this repository integration belongs to | 
**external_user_id** | **str** | User id from the provider | [optional] 
**id** | **str** | The unique id (UUID) of the repository integration | 
**installation_id** | **str** | Installation id from the provider | [optional] 
**repo_id** | **str** | Repository id from the provider | [optional] 
**repo_provider** | **str** | The provider of the repository | [optional] 
**repo_url** | **str** | The absolute URL of the repository | 
**service_connection_id** | **str** | The id of the service connection stored in customer credential store | [optional] 
**user_id** | **str** | The unique id (UUID) of the user who configured the repository | 

## Example

```python
from openapi_client.models.app_repo_response import AppRepoResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppRepoResponse from a JSON string
app_repo_response_instance = AppRepoResponse.from_json(json)
# print the JSON string representation of the object
print(AppRepoResponse.to_json())

# convert the object into a dict
app_repo_response_dict = app_repo_response_instance.to_dict()
# create an instance of AppRepoResponse from a dict
app_repo_response_from_dict = AppRepoResponse.from_dict(app_repo_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


