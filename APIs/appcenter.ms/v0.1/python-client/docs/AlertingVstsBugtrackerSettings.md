# AlertingVstsBugtrackerSettings

VSTS bugtracker specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**vsts_account_name** | **str** |  | [optional] 
**vsts_area_path** | **str** |  | [optional] 
**vsts_default_payload** | **object** |  | [optional] 
**vsts_project_id** | **str** |  | 
**vsts_project_name** | **str** |  | [optional] 
**vsts_project_uri** | **str** |  | 
**callback_url** | **str** |  | [optional] 
**owner_name** | **str** |  | 
**type** | **str** | type of bugtracker | 

## Example

```python
from openapi_client.models.alerting_vsts_bugtracker_settings import AlertingVstsBugtrackerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingVstsBugtrackerSettings from a JSON string
alerting_vsts_bugtracker_settings_instance = AlertingVstsBugtrackerSettings.from_json(json)
# print the JSON string representation of the object
print(AlertingVstsBugtrackerSettings.to_json())

# convert the object into a dict
alerting_vsts_bugtracker_settings_dict = alerting_vsts_bugtracker_settings_instance.to_dict()
# create an instance of AlertingVstsBugtrackerSettings from a dict
alerting_vsts_bugtracker_settings_from_dict = AlertingVstsBugtrackerSettings.from_dict(alerting_vsts_bugtracker_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


