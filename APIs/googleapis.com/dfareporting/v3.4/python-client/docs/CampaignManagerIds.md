# CampaignManagerIds

Campaign Manager IDs related to the custom event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_id** | **str** | Ad ID for Campaign Manager. | [optional] 
**campaign_id** | **str** | Campaign ID for Campaign Manager. | [optional] 
**creative_id** | **str** | Creative ID for Campaign Manager. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#campaignManagerIds\&quot;. | [optional] 
**placement_id** | **str** | Placement ID for Campaign Manager. | [optional] 
**site_id** | **str** | Site ID for Campaign Manager. | [optional] 

## Example

```python
from openapi_client.models.campaign_manager_ids import CampaignManagerIds

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignManagerIds from a JSON string
campaign_manager_ids_instance = CampaignManagerIds.from_json(json)
# print the JSON string representation of the object
print(CampaignManagerIds.to_json())

# convert the object into a dict
campaign_manager_ids_dict = campaign_manager_ids_instance.to_dict()
# create an instance of CampaignManagerIds from a dict
campaign_manager_ids_from_dict = CampaignManagerIds.from_dict(campaign_manager_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


