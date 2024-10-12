# DeletedWebAppsListDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[DeletedWebAppsListDefaultResponseErrorDetailsInner]**](DeletedWebAppsListDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_web_apps_list_default_response_error import DeletedWebAppsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedWebAppsListDefaultResponseError from a JSON string
deleted_web_apps_list_default_response_error_instance = DeletedWebAppsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(DeletedWebAppsListDefaultResponseError.to_json())

# convert the object into a dict
deleted_web_apps_list_default_response_error_dict = deleted_web_apps_list_default_response_error_instance.to_dict()
# create an instance of DeletedWebAppsListDefaultResponseError from a dict
deleted_web_apps_list_default_response_error_from_dict = DeletedWebAppsListDefaultResponseError.from_dict(deleted_web_apps_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


