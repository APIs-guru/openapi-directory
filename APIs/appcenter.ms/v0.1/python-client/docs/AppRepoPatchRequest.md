# AppRepoPatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_user_id** | **str** | The external user id from the provider | [optional] 
**repo_url** | **str** | The absolute URL of the repository | [optional] 
**service_connection_id** | **str** | The id of the service connection stored in customer credential store | [optional] 
**user_id** | **str** | The unique id (UUID) of the user | [optional] 

## Example

```python
from openapi_client.models.app_repo_patch_request import AppRepoPatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppRepoPatchRequest from a JSON string
app_repo_patch_request_instance = AppRepoPatchRequest.from_json(json)
# print the JSON string representation of the object
print(AppRepoPatchRequest.to_json())

# convert the object into a dict
app_repo_patch_request_dict = app_repo_patch_request_instance.to_dict()
# create an instance of AppRepoPatchRequest from a dict
app_repo_patch_request_from_dict = AppRepoPatchRequest.from_dict(app_repo_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


