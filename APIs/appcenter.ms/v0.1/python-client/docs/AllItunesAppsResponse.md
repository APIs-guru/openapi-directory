# AllItunesAppsResponse

Itunes teams details .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apple_id** | **str** | apple id for app team id. | [optional] 
**bundle_id** | **str** | bundle identifier of app | [optional] 
**icon_url** | **str** | url for the app icon from app store | [optional] 
**name** | **str** | App Name | [optional] 

## Example

```python
from openapi_client.models.all_itunes_apps_response import AllItunesAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AllItunesAppsResponse from a JSON string
all_itunes_apps_response_instance = AllItunesAppsResponse.from_json(json)
# print the JSON string representation of the object
print(AllItunesAppsResponse.to_json())

# convert the object into a dict
all_itunes_apps_response_dict = all_itunes_apps_response_instance.to_dict()
# create an instance of AllItunesAppsResponse from a dict
all_itunes_apps_response_from_dict = AllItunesAppsResponse.from_dict(all_itunes_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


