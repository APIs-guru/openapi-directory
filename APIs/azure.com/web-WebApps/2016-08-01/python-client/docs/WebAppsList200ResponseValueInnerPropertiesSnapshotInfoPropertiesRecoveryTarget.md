# WebAppsList200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget

Specifies the web app that snapshot contents will be written to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | ARM resource ID of the target app.  /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName} for production slots and  /subscriptions/{subId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Web/sites/{siteName}/slots/{slotName} for other slots. | [optional] 
**location** | **str** | Geographical location of the target web app, e.g. SouthEastAsia, SouthCentralUS | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner_properties_snapshot_info_properties_recovery_target import WebAppsList200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget from a JSON string
web_apps_list200_response_value_inner_properties_snapshot_info_properties_recovery_target_instance = WebAppsList200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_snapshot_info_properties_recovery_target_dict = web_apps_list200_response_value_inner_properties_snapshot_info_properties_recovery_target_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget from a dict
web_apps_list200_response_value_inner_properties_snapshot_info_properties_recovery_target_from_dict = WebAppsList200ResponseValueInnerPropertiesSnapshotInfoPropertiesRecoveryTarget.from_dict(web_apps_list200_response_value_inner_properties_snapshot_info_properties_recovery_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


