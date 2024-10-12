# CampaignCreativeAssociation

Identifies a creative which has been associated with a given campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_id** | **str** | ID of the creative associated with the campaign. This is a required field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#campaignCreativeAssociation\&quot;. | [optional] 

## Example

```python
from openapi_client.models.campaign_creative_association import CampaignCreativeAssociation

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignCreativeAssociation from a JSON string
campaign_creative_association_instance = CampaignCreativeAssociation.from_json(json)
# print the JSON string representation of the object
print(CampaignCreativeAssociation.to_json())

# convert the object into a dict
campaign_creative_association_dict = campaign_creative_association_instance.to_dict()
# create an instance of CampaignCreativeAssociation from a dict
campaign_creative_association_from_dict = CampaignCreativeAssociation.from_dict(campaign_creative_association_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


