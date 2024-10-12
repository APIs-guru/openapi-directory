# WebAppsListDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[WebAppsListDefaultResponseErrorDetailsInner]**](WebAppsListDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_list_default_response_error import WebAppsListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListDefaultResponseError from a JSON string
web_apps_list_default_response_error_instance = WebAppsListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(WebAppsListDefaultResponseError.to_json())

# convert the object into a dict
web_apps_list_default_response_error_dict = web_apps_list_default_response_error_instance.to_dict()
# create an instance of WebAppsListDefaultResponseError from a dict
web_apps_list_default_response_error_from_dict = WebAppsListDefaultResponseError.from_dict(web_apps_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


