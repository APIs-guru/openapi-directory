# RemarketingAudience

JSON template for an Analytics remarketing audience.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this remarketing audience belongs. | [optional] 
**audience_definition** | [**RemarketingAudienceAudienceDefinition**](RemarketingAudienceAudienceDefinition.md) |  | [optional] 
**audience_type** | **str** | The type of audience, either SIMPLE or STATE_BASED. | [optional] 
**created** | **datetime** | Time this remarketing audience was created. | [optional] [readonly] 
**description** | **str** | The description of this remarketing audience. | [optional] [readonly] 
**id** | **str** | Remarketing Audience ID. | [optional] 
**internal_web_property_id** | **str** | Internal ID for the web property to which this remarketing audience belongs. | [optional] [readonly] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#remarketingAudience']
**linked_ad_accounts** | [**List[LinkedForeignAccount]**](LinkedForeignAccount.md) | The linked ad accounts associated with this remarketing audience. A remarketing audience can have only one linkedAdAccount currently. | [optional] 
**linked_views** | **List[str]** | The views (profiles) that this remarketing audience is linked to. | [optional] 
**name** | **str** | The name of this remarketing audience. | [optional] 
**state_based_audience_definition** | [**RemarketingAudienceStateBasedAudienceDefinition**](RemarketingAudienceStateBasedAudienceDefinition.md) |  | [optional] 
**updated** | **datetime** | Time this remarketing audience was last modified. | [optional] [readonly] 
**web_property_id** | **str** | Web property ID of the form UA-XXXXX-YY to which this remarketing audience belongs. | [optional] 

## Example

```python
from openapi_client.models.remarketing_audience import RemarketingAudience

# TODO update the JSON string below
json = "{}"
# create an instance of RemarketingAudience from a JSON string
remarketing_audience_instance = RemarketingAudience.from_json(json)
# print the JSON string representation of the object
print(RemarketingAudience.to_json())

# convert the object into a dict
remarketing_audience_dict = remarketing_audience_instance.to_dict()
# create an instance of RemarketingAudience from a dict
remarketing_audience_from_dict = RemarketingAudience.from_dict(remarketing_audience_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


