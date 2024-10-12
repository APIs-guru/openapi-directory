# WebAppsGetVnetConnectionSlot200Response

Virtual Network information contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**WebAppsListVnetConnectionsSlot200ResponseInnerProperties**](WebAppsListVnetConnectionsSlot200ResponseInnerProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.web_apps_get_vnet_connection_slot200_response import WebAppsGetVnetConnectionSlot200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsGetVnetConnectionSlot200Response from a JSON string
web_apps_get_vnet_connection_slot200_response_instance = WebAppsGetVnetConnectionSlot200Response.from_json(json)
# print the JSON string representation of the object
print(WebAppsGetVnetConnectionSlot200Response.to_json())

# convert the object into a dict
web_apps_get_vnet_connection_slot200_response_dict = web_apps_get_vnet_connection_slot200_response_instance.to_dict()
# create an instance of WebAppsGetVnetConnectionSlot200Response from a dict
web_apps_get_vnet_connection_slot200_response_from_dict = WebAppsGetVnetConnectionSlot200Response.from_dict(web_apps_get_vnet_connection_slot200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


