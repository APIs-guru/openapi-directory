# WebAppsGetHybridConnection200Response

Hybrid Connection contract. This is used to configure a Hybrid Connection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebAppsGetHybridConnection200ResponseProperties**](WebAppsGetHybridConnection200ResponseProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_get_hybrid_connection200_response import WebAppsGetHybridConnection200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsGetHybridConnection200Response from a JSON string
web_apps_get_hybrid_connection200_response_instance = WebAppsGetHybridConnection200Response.from_json(json)
# print the JSON string representation of the object
print(WebAppsGetHybridConnection200Response.to_json())

# convert the object into a dict
web_apps_get_hybrid_connection200_response_dict = web_apps_get_hybrid_connection200_response_instance.to_dict()
# create an instance of WebAppsGetHybridConnection200Response from a dict
web_apps_get_hybrid_connection200_response_from_dict = WebAppsGetHybridConnection200Response.from_dict(web_apps_get_hybrid_connection200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


