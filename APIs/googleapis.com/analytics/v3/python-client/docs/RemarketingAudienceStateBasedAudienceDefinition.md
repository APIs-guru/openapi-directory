# RemarketingAudienceStateBasedAudienceDefinition

A state based audience definition that will cause a user to be added or removed from an audience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_conditions** | [**RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions**](RemarketingAudienceStateBasedAudienceDefinitionExcludeConditions.md) |  | [optional] 
**include_conditions** | [**IncludeConditions**](IncludeConditions.md) |  | [optional] 

## Example

```python
from openapi_client.models.remarketing_audience_state_based_audience_definition import RemarketingAudienceStateBasedAudienceDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RemarketingAudienceStateBasedAudienceDefinition from a JSON string
remarketing_audience_state_based_audience_definition_instance = RemarketingAudienceStateBasedAudienceDefinition.from_json(json)
# print the JSON string representation of the object
print(RemarketingAudienceStateBasedAudienceDefinition.to_json())

# convert the object into a dict
remarketing_audience_state_based_audience_definition_dict = remarketing_audience_state_based_audience_definition_instance.to_dict()
# create an instance of RemarketingAudienceStateBasedAudienceDefinition from a dict
remarketing_audience_state_based_audience_definition_from_dict = RemarketingAudienceStateBasedAudienceDefinition.from_dict(remarketing_audience_state_based_audience_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


