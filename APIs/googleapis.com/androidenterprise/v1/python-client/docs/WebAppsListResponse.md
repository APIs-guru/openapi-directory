# WebAppsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**web_app** | [**List[WebApp]**](WebApp.md) | The manifest describing a web app. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list_response import WebAppsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListResponse from a JSON string
web_apps_list_response_instance = WebAppsListResponse.from_json(json)
# print the JSON string representation of the object
print(WebAppsListResponse.to_json())

# convert the object into a dict
web_apps_list_response_dict = web_apps_list_response_instance.to_dict()
# create an instance of WebAppsListResponse from a dict
web_apps_list_response_from_dict = WebAppsListResponse.from_dict(web_apps_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


