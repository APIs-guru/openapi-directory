# NewAppReleaseAlertingEventAllOfAppReleaseProperties

Properties of new application release

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_display_name** | **str** |  | 
**app_name** | **str** |  | 
**bundle_identifier** | **str** |  | 
**distribution_group_id** | **str** |  | [optional] 
**fingerprint** | **str** |  | [optional] 
**icon_link** | **str** |  | [optional] 
**install_link** | **str** |  | 
**installable** | **bool** |  | [optional] 
**mandatory_update** | **bool** |  | [optional] 
**min_os** | **str** |  | [optional] 
**platform** | **str** |  | 
**provisioning_profile_name** | **str** |  | [optional] 
**provisioning_profile_type** | **str** |  | [optional] 
**release_id** | **str** |  | 
**release_notes** | **str** |  | [optional] 
**short_version** | **str** |  | 
**size** | **int** |  | 
**uploaded_at** | **str** | Date and time in ISO 8601 format | 
**version** | **str** |  | 

## Example

```python
from openapi_client.models.new_app_release_alerting_event_all_of_app_release_properties import NewAppReleaseAlertingEventAllOfAppReleaseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of NewAppReleaseAlertingEventAllOfAppReleaseProperties from a JSON string
new_app_release_alerting_event_all_of_app_release_properties_instance = NewAppReleaseAlertingEventAllOfAppReleaseProperties.from_json(json)
# print the JSON string representation of the object
print(NewAppReleaseAlertingEventAllOfAppReleaseProperties.to_json())

# convert the object into a dict
new_app_release_alerting_event_all_of_app_release_properties_dict = new_app_release_alerting_event_all_of_app_release_properties_instance.to_dict()
# create an instance of NewAppReleaseAlertingEventAllOfAppReleaseProperties from a dict
new_app_release_alerting_event_all_of_app_release_properties_from_dict = NewAppReleaseAlertingEventAllOfAppReleaseProperties.from_dict(new_app_release_alerting_event_all_of_app_release_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


