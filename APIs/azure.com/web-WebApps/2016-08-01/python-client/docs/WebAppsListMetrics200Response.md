# WebAppsListMetrics200Response

Collection of metric responses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[WebAppsListMetrics200ResponseValueInner]**](WebAppsListMetrics200ResponseValueInner.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.web_apps_list_metrics200_response import WebAppsListMetrics200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListMetrics200Response from a JSON string
web_apps_list_metrics200_response_instance = WebAppsListMetrics200Response.from_json(json)
# print the JSON string representation of the object
print(WebAppsListMetrics200Response.to_json())

# convert the object into a dict
web_apps_list_metrics200_response_dict = web_apps_list_metrics200_response_instance.to_dict()
# create an instance of WebAppsListMetrics200Response from a dict
web_apps_list_metrics200_response_from_dict = WebAppsListMetrics200Response.from_dict(web_apps_list_metrics200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


