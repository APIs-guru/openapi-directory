# ListWebAppsResponse

Response to a request to list web apps for a given enterprise.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If there are more results, a token to retrieve next page of results. | [optional] 
**web_apps** | [**List[WebApp]**](WebApp.md) | The list of web apps. | [optional] 

## Example

```python
from openapi_client.models.list_web_apps_response import ListWebAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListWebAppsResponse from a JSON string
list_web_apps_response_instance = ListWebAppsResponse.from_json(json)
# print the JSON string representation of the object
print(ListWebAppsResponse.to_json())

# convert the object into a dict
list_web_apps_response_dict = list_web_apps_response_instance.to_dict()
# create an instance of ListWebAppsResponse from a dict
list_web_apps_response_from_dict = ListWebAppsResponse.from_dict(list_web_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


