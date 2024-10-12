# CompanionSetting

Companion Settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**companions_disabled** | **bool** | Whether companions are disabled for this placement. | [optional] 
**enabled_sizes** | [**List[Size]**](Size.md) | Allowlist of companion sizes to be served to this placement. Set this list to null or empty to serve all companion sizes. | [optional] 
**image_only** | **bool** | Whether to serve only static images as companions. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#companionSetting\&quot;. | [optional] 

## Example

```python
from openapi_client.models.companion_setting import CompanionSetting

# TODO update the JSON string below
json = "{}"
# create an instance of CompanionSetting from a JSON string
companion_setting_instance = CompanionSetting.from_json(json)
# print the JSON string representation of the object
print(CompanionSetting.to_json())

# convert the object into a dict
companion_setting_dict = companion_setting_instance.to_dict()
# create an instance of CompanionSetting from a dict
companion_setting_from_dict = CompanionSetting.from_dict(companion_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


