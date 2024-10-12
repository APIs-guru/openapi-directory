# AppRepoPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_user_id** | **str** | The external user id from the provider | [optional] 
**installation_id** | **str** | Installation id from the provider | [optional] 
**repo_id** | **str** | Repository id from the provider | [optional] 
**repo_provider** | **str** | The provider of the repository | [optional] 
**repo_url** | **str** | The absolute URL of the repository | 
**service_connection_id** | **str** | The id of the service connection stored in customer credential store | [optional] 
**user_id** | **str** | The unique id (UUID) of the user who configured the repository | 

## Example

```python
from openapi_client.models.app_repo_post_request import AppRepoPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppRepoPostRequest from a JSON string
app_repo_post_request_instance = AppRepoPostRequest.from_json(json)
# print the JSON string representation of the object
print(AppRepoPostRequest.to_json())

# convert the object into a dict
app_repo_post_request_dict = app_repo_post_request_instance.to_dict()
# create an instance of AppRepoPostRequest from a dict
app_repo_post_request_from_dict = AppRepoPostRequest.from_dict(app_repo_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


