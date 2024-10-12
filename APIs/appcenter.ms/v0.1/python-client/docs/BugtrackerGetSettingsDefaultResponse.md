# BugtrackerGetSettingsDefaultResponse

Alerting service error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique request identifier for tracking | 
**code** | **int** | The status code return by the API. It can be 400 or 404 or 409 or 500. | 
**message** | **str** | The reason for the request failed | [optional] 

## Example

```python
from openapi_client.models.bugtracker_get_settings_default_response import BugtrackerGetSettingsDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BugtrackerGetSettingsDefaultResponse from a JSON string
bugtracker_get_settings_default_response_instance = BugtrackerGetSettingsDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(BugtrackerGetSettingsDefaultResponse.to_json())

# convert the object into a dict
bugtracker_get_settings_default_response_dict = bugtracker_get_settings_default_response_instance.to_dict()
# create an instance of BugtrackerGetSettingsDefaultResponse from a dict
bugtracker_get_settings_default_response_from_dict = BugtrackerGetSettingsDefaultResponse.from_dict(bugtracker_get_settings_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


