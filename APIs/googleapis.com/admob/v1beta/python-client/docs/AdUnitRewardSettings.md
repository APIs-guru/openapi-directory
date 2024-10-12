# AdUnitRewardSettings

Settings for a rewarded ad unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit_amount** | **str** | Reward amount for this ad unit. | [optional] 
**unit_type** | **str** | Reward item for this ad unit. | [optional] 

## Example

```python
from openapi_client.models.ad_unit_reward_settings import AdUnitRewardSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AdUnitRewardSettings from a JSON string
ad_unit_reward_settings_instance = AdUnitRewardSettings.from_json(json)
# print the JSON string representation of the object
print(AdUnitRewardSettings.to_json())

# convert the object into a dict
ad_unit_reward_settings_dict = ad_unit_reward_settings_instance.to_dict()
# create an instance of AdUnitRewardSettings from a dict
ad_unit_reward_settings_from_dict = AdUnitRewardSettings.from_dict(ad_unit_reward_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


