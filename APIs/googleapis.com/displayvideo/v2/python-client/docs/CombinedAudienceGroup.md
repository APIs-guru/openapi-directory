# CombinedAudienceGroup

Details of combined audience group. All combined audience targeting settings are logically ‘OR’ of each other.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**List[CombinedAudienceTargetingSetting]**](CombinedAudienceTargetingSetting.md) | Required. All combined audience targeting settings in combined audience group. Repeated settings with same id will be ignored. The number of combined audience settings should be no more than five, error will be thrown otherwise. | [optional] 

## Example

```python
from openapi_client.models.combined_audience_group import CombinedAudienceGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CombinedAudienceGroup from a JSON string
combined_audience_group_instance = CombinedAudienceGroup.from_json(json)
# print the JSON string representation of the object
print(CombinedAudienceGroup.to_json())

# convert the object into a dict
combined_audience_group_dict = combined_audience_group_instance.to_dict()
# create an instance of CombinedAudienceGroup from a dict
combined_audience_group_from_dict = CombinedAudienceGroup.from_dict(combined_audience_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


