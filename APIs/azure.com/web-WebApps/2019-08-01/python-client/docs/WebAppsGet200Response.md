# WebAppsGet200Response

A web app, a mobile app backend, or an API app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**WebAppsList200ResponseValueInnerIdentity**](WebAppsList200ResponseValueInnerIdentity.md) |  | [optional] 
**properties** | [**WebAppsList200ResponseValueInnerProperties**](WebAppsList200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**location** | **str** | Resource Location. | 
**name** | **str** | Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_get200_response import WebAppsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsGet200Response from a JSON string
web_apps_get200_response_instance = WebAppsGet200Response.from_json(json)
# print the JSON string representation of the object
print(WebAppsGet200Response.to_json())

# convert the object into a dict
web_apps_get200_response_dict = web_apps_get200_response_instance.to_dict()
# create an instance of WebAppsGet200Response from a dict
web_apps_get200_response_from_dict = WebAppsGet200Response.from_dict(web_apps_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


