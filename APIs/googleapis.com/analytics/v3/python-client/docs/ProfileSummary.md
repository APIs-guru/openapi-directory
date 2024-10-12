# ProfileSummary

JSON template for an Analytics ProfileSummary. ProfileSummary returns basic information (i.e., summary) for a profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | View (profile) ID. | [optional] 
**kind** | **str** | Resource type for Analytics ProfileSummary. | [optional] [default to 'analytics#profileSummary']
**name** | **str** | View (profile) name. | [optional] 
**starred** | **bool** | Indicates whether this view (profile) is starred or not. | [optional] 
**type** | **str** | View (Profile) type. Supported types: WEB or APP. | [optional] 

## Example

```python
from openapi_client.models.profile_summary import ProfileSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileSummary from a JSON string
profile_summary_instance = ProfileSummary.from_json(json)
# print the JSON string representation of the object
print(ProfileSummary.to_json())

# convert the object into a dict
profile_summary_dict = profile_summary_instance.to_dict()
# create an instance of ProfileSummary from a dict
profile_summary_from_dict = ProfileSummary.from_dict(profile_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


