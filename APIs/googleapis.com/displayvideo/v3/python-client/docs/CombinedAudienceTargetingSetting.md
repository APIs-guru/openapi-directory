# CombinedAudienceTargetingSetting

Details of combined audience targeting setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**combined_audience_id** | **str** | Required. Combined audience id of combined audience targeting setting. This id is combined_audience_id. | [optional] 

## Example

```python
from openapi_client.models.combined_audience_targeting_setting import CombinedAudienceTargetingSetting

# TODO update the JSON string below
json = "{}"
# create an instance of CombinedAudienceTargetingSetting from a JSON string
combined_audience_targeting_setting_instance = CombinedAudienceTargetingSetting.from_json(json)
# print the JSON string representation of the object
print(CombinedAudienceTargetingSetting.to_json())

# convert the object into a dict
combined_audience_targeting_setting_dict = combined_audience_targeting_setting_instance.to_dict()
# create an instance of CombinedAudienceTargetingSetting from a dict
combined_audience_targeting_setting_from_dict = CombinedAudienceTargetingSetting.from_dict(combined_audience_targeting_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


