# BugtrackerGetSettings200ResponseSettings

Bugtracker specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_url** | **str** |  | [optional] 
**owner_name** | **str** |  | 
**type** | **str** | type of bugtracker | 

## Example

```python
from openapi_client.models.bugtracker_get_settings200_response_settings import BugtrackerGetSettings200ResponseSettings

# TODO update the JSON string below
json = "{}"
# create an instance of BugtrackerGetSettings200ResponseSettings from a JSON string
bugtracker_get_settings200_response_settings_instance = BugtrackerGetSettings200ResponseSettings.from_json(json)
# print the JSON string representation of the object
print(BugtrackerGetSettings200ResponseSettings.to_json())

# convert the object into a dict
bugtracker_get_settings200_response_settings_dict = bugtracker_get_settings200_response_settings_instance.to_dict()
# create an instance of BugtrackerGetSettings200ResponseSettings from a dict
bugtracker_get_settings200_response_settings_from_dict = BugtrackerGetSettings200ResponseSettings.from_dict(bugtracker_get_settings200_response_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


