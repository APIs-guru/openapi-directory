# CloningInfo

Represents information needed for cloning operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_settings_overrides** | **Dict[str, str]** | Application settings overrides for cloned web app. If specified these settings will override the settings cloned               from source web app. If not specified, application settings from source web app are retained. | [optional] 
**clone_custom_host_names** | **bool** | If true, clone custom hostnames from source web app | [optional] 
**clone_source_control** | **bool** | Clone source control from source web app | [optional] 
**configure_load_balancing** | **bool** | If specified configure load balancing for source and clone site | [optional] 
**correlation_id** | **str** | Correlation Id of cloning operation. This id ties multiple cloning operations              together to use the same snapshot | [optional] 
**hosting_environment** | **str** | Hosting environment | [optional] 
**overwrite** | **bool** | Overwrite destination web app | [optional] 
**source_web_app_id** | **str** | ARM resource id of the source web app. Web app resource id is of the form               /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and               /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots | [optional] 
**traffic_manager_profile_id** | **str** | ARM resource id of the traffic manager profile to use if it exists. Traffic manager resource id is of the form               /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{profileName} | [optional] 
**traffic_manager_profile_name** | **str** | Name of traffic manager profile to create. This is only needed if traffic manager profile does not already exist | [optional] 

## Example

```python
from openapi_client.models.cloning_info import CloningInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CloningInfo from a JSON string
cloning_info_instance = CloningInfo.from_json(json)
# print the JSON string representation of the object
print(CloningInfo.to_json())

# convert the object into a dict
cloning_info_dict = cloning_info_instance.to_dict()
# create an instance of CloningInfo from a dict
cloning_info_from_dict = CloningInfo.from_dict(cloning_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


