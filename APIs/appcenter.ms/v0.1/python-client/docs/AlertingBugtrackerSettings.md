# AlertingBugtrackerSettings

Bugtracker specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** |  | [optional] 
**owner_name** | **str** |  | 
**type** | **str** | type of bugtracker | 

## Example

```python
from openapi_client.models.alerting_bugtracker_settings import AlertingBugtrackerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingBugtrackerSettings from a JSON string
alerting_bugtracker_settings_instance = AlertingBugtrackerSettings.from_json(json)
# print the JSON string representation of the object
print(AlertingBugtrackerSettings.to_json())

# convert the object into a dict
alerting_bugtracker_settings_dict = alerting_bugtracker_settings_instance.to_dict()
# create an instance of AlertingBugtrackerSettings from a dict
alerting_bugtracker_settings_from_dict = AlertingBugtrackerSettings.from_dict(alerting_bugtracker_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


