# DeletedWebAppsListDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**DeletedWebAppsListDefaultResponseError**](DeletedWebAppsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.deleted_web_apps_list_default_response import DeletedWebAppsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedWebAppsListDefaultResponse from a JSON string
deleted_web_apps_list_default_response_instance = DeletedWebAppsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(DeletedWebAppsListDefaultResponse.to_json())

# convert the object into a dict
deleted_web_apps_list_default_response_dict = deleted_web_apps_list_default_response_instance.to_dict()
# create an instance of DeletedWebAppsListDefaultResponse from a dict
deleted_web_apps_list_default_response_from_dict = DeletedWebAppsListDefaultResponse.from_dict(deleted_web_apps_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


