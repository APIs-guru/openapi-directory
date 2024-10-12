# AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoProperties

SnapshotRecoveryRequest resource specific properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_conflicting_host_names** | **bool** | If true, custom hostname conflicts will be ignored when recovering to a target web app. This setting is only necessary when RecoverConfiguration is enabled. | [optional] 
**overwrite** | **bool** | If &lt;code&gt;true&lt;/code&gt; the recovery operation can overwrite source app; otherwise, &lt;code&gt;false&lt;/code&gt;. | 
**recover_configuration** | **bool** | If true, site configuration, in addition to content, will be reverted. | [optional] 
**recovery_target** | [**AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget**](AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget.md) |  | [optional] 
**snapshot_time** | **str** | Point in time in which the app recovery should be attempted, formatted as a DateTime string. | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties import AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoProperties from a JSON string
app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_instance = AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoProperties.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoProperties.to_json())

# convert the object into a dict
app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_dict = app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_instance.to_dict()
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoProperties from a dict
app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_from_dict = AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoProperties.from_dict(app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


