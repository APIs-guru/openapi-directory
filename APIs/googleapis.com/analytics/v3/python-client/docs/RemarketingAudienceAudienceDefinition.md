# RemarketingAudienceAudienceDefinition

The simple audience definition that will cause a user to be added to an audience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_conditions** | [**IncludeConditions**](IncludeConditions.md) |  | [optional] 

## Example

```python
from openapi_client.models.remarketing_audience_audience_definition import RemarketingAudienceAudienceDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of RemarketingAudienceAudienceDefinition from a JSON string
remarketing_audience_audience_definition_instance = RemarketingAudienceAudienceDefinition.from_json(json)
# print the JSON string representation of the object
print(RemarketingAudienceAudienceDefinition.to_json())

# convert the object into a dict
remarketing_audience_audience_definition_dict = remarketing_audience_audience_definition_instance.to_dict()
# create an instance of RemarketingAudienceAudienceDefinition from a dict
remarketing_audience_audience_definition_from_dict = RemarketingAudienceAudienceDefinition.from_dict(remarketing_audience_audience_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


