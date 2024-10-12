# WebAppsListDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**WebAppsListDefaultResponseError**](WebAppsListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.web_apps_list_default_response import WebAppsListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListDefaultResponse from a JSON string
web_apps_list_default_response_instance = WebAppsListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(WebAppsListDefaultResponse.to_json())

# convert the object into a dict
web_apps_list_default_response_dict = web_apps_list_default_response_instance.to_dict()
# create an instance of WebAppsListDefaultResponse from a dict
web_apps_list_default_response_from_dict = WebAppsListDefaultResponse.from_dict(web_apps_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


