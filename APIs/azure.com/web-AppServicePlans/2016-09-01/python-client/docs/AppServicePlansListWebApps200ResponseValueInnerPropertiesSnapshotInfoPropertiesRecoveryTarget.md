# AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget

Specifies the web app that snapshot contents will be written to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ARM resource ID of the target app.  /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and  /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots. | [optional] 
**location** | **str** | Geographical location of the target web app, e.g. SouthEastAsia, SouthCentralUS | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_recovery_target import AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget from a JSON string
app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_recovery_target_instance = AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget.to_json())

# convert the object into a dict
app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_recovery_target_dict = app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_recovery_target_instance.to_dict()
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget from a dict
app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_recovery_target_from_dict = AppServicePlansListWebApps200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget.from_dict(app_service_plans_list_web_apps200_response_value_inner_properties_snapshot_info_properties_recovery_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


