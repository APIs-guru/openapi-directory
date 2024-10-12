# DeletedWebAppsGetDeletedWebAppByLocation200Response

A deleted app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties**](DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_web_apps_get_deleted_web_app_by_location200_response import DeletedWebAppsGetDeletedWebAppByLocation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedWebAppsGetDeletedWebAppByLocation200Response from a JSON string
deleted_web_apps_get_deleted_web_app_by_location200_response_instance = DeletedWebAppsGetDeletedWebAppByLocation200Response.from_json(json)
# print the JSON string representation of the object
print(DeletedWebAppsGetDeletedWebAppByLocation200Response.to_json())

# convert the object into a dict
deleted_web_apps_get_deleted_web_app_by_location200_response_dict = deleted_web_apps_get_deleted_web_app_by_location200_response_instance.to_dict()
# create an instance of DeletedWebAppsGetDeletedWebAppByLocation200Response from a dict
deleted_web_apps_get_deleted_web_app_by_location200_response_from_dict = DeletedWebAppsGetDeletedWebAppByLocation200Response.from_dict(deleted_web_apps_get_deleted_web_app_by_location200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


