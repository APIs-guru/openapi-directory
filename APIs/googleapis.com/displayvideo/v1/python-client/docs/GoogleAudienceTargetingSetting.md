# GoogleAudienceTargetingSetting

Details of Google audience targeting setting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**google_audience_id** | **str** | Required. Google audience id of the Google audience targeting setting. This id is google_audience_id. | [optional] 

## Example

```python
from openapi_client.models.google_audience_targeting_setting import GoogleAudienceTargetingSetting

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAudienceTargetingSetting from a JSON string
google_audience_targeting_setting_instance = GoogleAudienceTargetingSetting.from_json(json)
# print the JSON string representation of the object
print(GoogleAudienceTargetingSetting.to_json())

# convert the object into a dict
google_audience_targeting_setting_dict = google_audience_targeting_setting_instance.to_dict()
# create an instance of GoogleAudienceTargetingSetting from a dict
google_audience_targeting_setting_from_dict = GoogleAudienceTargetingSetting.from_dict(google_audience_targeting_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


