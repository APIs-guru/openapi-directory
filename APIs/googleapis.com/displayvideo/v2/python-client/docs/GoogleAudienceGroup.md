# GoogleAudienceGroup

Details of Google audience group. All Google audience targeting settings are logically ‘OR’ of each other.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**List[GoogleAudienceTargetingSetting]**](GoogleAudienceTargetingSetting.md) | Required. All Google audience targeting settings in Google audience group. Repeated settings with same id will be ignored. | [optional] 

## Example

```python
from openapi_client.models.google_audience_group import GoogleAudienceGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAudienceGroup from a JSON string
google_audience_group_instance = GoogleAudienceGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleAudienceGroup.to_json())

# convert the object into a dict
google_audience_group_dict = google_audience_group_instance.to_dict()
# create an instance of GoogleAudienceGroup from a dict
google_audience_group_from_dict = GoogleAudienceGroup.from_dict(google_audience_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


