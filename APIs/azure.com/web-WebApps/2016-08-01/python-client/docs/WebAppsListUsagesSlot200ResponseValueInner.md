# WebAppsListUsagesSlot200ResponseValueInner

Usage of the quota resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_value** | **int** | The current value of the resource counter. | [optional] 
**limit** | **int** | The resource limit. | [optional] 
**name** | [**WebAppsListUsagesSlot200ResponseValueInnerName**](WebAppsListUsagesSlot200ResponseValueInnerName.md) |  | [optional] 
**next_reset_time** | **datetime** | Next reset time for the resource counter. | [optional] 
**unit** | **str** | Units of measurement for the quota resource. | [optional] 

## Example

```python
from openapi_client.models.web_apps_list_usages_slot200_response_value_inner import WebAppsListUsagesSlot200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsListUsagesSlot200ResponseValueInner from a JSON string
web_apps_list_usages_slot200_response_value_inner_instance = WebAppsListUsagesSlot200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsListUsagesSlot200ResponseValueInner.to_json())

# convert the object into a dict
web_apps_list_usages_slot200_response_value_inner_dict = web_apps_list_usages_slot200_response_value_inner_instance.to_dict()
# create an instance of WebAppsListUsagesSlot200ResponseValueInner from a dict
web_apps_list_usages_slot200_response_value_inner_from_dict = WebAppsListUsagesSlot200ResponseValueInner.from_dict(web_apps_list_usages_slot200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


