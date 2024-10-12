# CampaignCreativeAssociationsListResponse

Campaign Creative Association List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign_creative_associations** | [**List[CampaignCreativeAssociation]**](CampaignCreativeAssociation.md) | Campaign creative association collection | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#campaignCreativeAssociationsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.campaign_creative_associations_list_response import CampaignCreativeAssociationsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignCreativeAssociationsListResponse from a JSON string
campaign_creative_associations_list_response_instance = CampaignCreativeAssociationsListResponse.from_json(json)
# print the JSON string representation of the object
print(CampaignCreativeAssociationsListResponse.to_json())

# convert the object into a dict
campaign_creative_associations_list_response_dict = campaign_creative_associations_list_response_instance.to_dict()
# create an instance of CampaignCreativeAssociationsListResponse from a dict
campaign_creative_associations_list_response_from_dict = CampaignCreativeAssociationsListResponse.from_dict(campaign_creative_associations_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


