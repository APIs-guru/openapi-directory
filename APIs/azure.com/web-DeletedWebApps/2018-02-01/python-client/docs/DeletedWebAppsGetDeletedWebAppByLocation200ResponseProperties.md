# DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties

DeletedSite resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_site_id** | **int** | Numeric id for the deleted site | [optional] [readonly] 
**deleted_site_name** | **str** | Name of the deleted site | [optional] [readonly] 
**deleted_timestamp** | **str** | Time in UTC when the app was deleted. | [optional] [readonly] 
**geo_region_name** | **str** | Geo Region of the deleted site | [optional] [readonly] 
**kind** | **str** | Kind of site that was deleted | [optional] [readonly] 
**resource_group** | **str** | ResourceGroup that contained the deleted site | [optional] [readonly] 
**slot** | **str** | Slot of the deleted site | [optional] [readonly] 
**subscription** | **str** | Subscription containing the deleted site | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_web_apps_get_deleted_web_app_by_location200_response_properties import DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties from a JSON string
deleted_web_apps_get_deleted_web_app_by_location200_response_properties_instance = DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties.from_json(json)
# print the JSON string representation of the object
print(DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties.to_json())

# convert the object into a dict
deleted_web_apps_get_deleted_web_app_by_location200_response_properties_dict = deleted_web_apps_get_deleted_web_app_by_location200_response_properties_instance.to_dict()
# create an instance of DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties from a dict
deleted_web_apps_get_deleted_web_app_by_location200_response_properties_from_dict = DeletedWebAppsGetDeletedWebAppByLocation200ResponseProperties.from_dict(deleted_web_apps_get_deleted_web_app_by_location200_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


