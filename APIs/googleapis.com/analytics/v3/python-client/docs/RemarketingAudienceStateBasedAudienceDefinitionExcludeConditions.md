# RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions

Defines the conditions to exclude users from the audience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusion_duration** | **str** | Whether to make the exclusion TEMPORARY or PERMANENT. | [optional] 
**segment** | **str** | The segment condition that will cause a user to be removed from an audience. | [optional] 

## Example

```python
from openapi_client.models.remarketing_audience_state_based_audience_definition_exclude_conditions import RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions

# TODO update the JSON string below
json = "{}"
# create an instance of RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions from a JSON string
remarketing_audience_state_based_audience_definition_exclude_conditions_instance = RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions.from_json(json)
# print the JSON string representation of the object
print(RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions.to_json())

# convert the object into a dict
remarketing_audience_state_based_audience_definition_exclude_conditions_dict = remarketing_audience_state_based_audience_definition_exclude_conditions_instance.to_dict()
# create an instance of RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions from a dict
remarketing_audience_state_based_audience_definition_exclude_conditions_from_dict = RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions.from_dict(remarketing_audience_state_based_audience_definition_exclude_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


