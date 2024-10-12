# Campaign

Contains properties of a Campaign Manager campaign.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this campaign. This is a read-only field that can be left blank. | [optional] 
**ad_blocking_configuration** | [**AdBlockingConfiguration**](AdBlockingConfiguration.md) |  | [optional] 
**additional_creative_optimization_configurations** | [**List[CreativeOptimizationConfiguration]**](CreativeOptimizationConfiguration.md) | Additional creative optimization configurations for the campaign. | [optional] 
**advertiser_group_id** | **str** | Advertiser group ID of the associated advertiser. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this campaign. This is a required field. | [optional] 
**advertiser_id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**archived** | **bool** | Whether this campaign has been archived. | [optional] 
**audience_segment_groups** | [**List[AudienceSegmentGroup]**](AudienceSegmentGroup.md) | Audience segment groups assigned to this campaign. Cannot have more than 300 segment groups. | [optional] 
**billing_invoice_code** | **str** | Billing invoice code included in the Campaign Manager client billing invoices associated with the campaign. | [optional] 
**click_through_url_suffix_properties** | [**ClickThroughUrlSuffixProperties**](ClickThroughUrlSuffixProperties.md) |  | [optional] 
**comment** | **str** | Arbitrary comments about this campaign. Must be less than 256 characters long. | [optional] 
**create_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**creative_group_ids** | **List[str]** | List of creative group IDs that are assigned to the campaign. | [optional] 
**creative_optimization_configuration** | [**CreativeOptimizationConfiguration**](CreativeOptimizationConfiguration.md) |  | [optional] 
**default_click_through_event_tag_properties** | [**DefaultClickThroughEventTagProperties**](DefaultClickThroughEventTagProperties.md) |  | [optional] 
**default_landing_page_id** | **str** | The default landing page ID for this campaign. | [optional] 
**end_date** | **date** |  | [optional] 
**event_tag_overrides** | [**List[EventTagOverride]**](EventTagOverride.md) | Overrides that can be used to activate or deactivate advertiser event tags. | [optional] 
**external_id** | **str** | External ID for this campaign. | [optional] 
**id** | **str** | ID of this campaign. This is a read-only auto-generated field. | [optional] 
**id_dimension_value** | [**DimensionValue**](DimensionValue.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#campaign\&quot;. | [optional] 
**last_modified_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**name** | **str** | Name of this campaign. This is a required field and must be less than 256 characters long and unique among campaigns of the same advertiser. | [optional] 
**nielsen_ocr_enabled** | **bool** | Whether Nielsen reports are enabled for this campaign. | [optional] 
**start_date** | **date** |  | [optional] 
**subaccount_id** | **str** | Subaccount ID of this campaign. This is a read-only field that can be left blank. | [optional] 
**trafficker_emails** | **List[str]** | Campaign trafficker contact emails. | [optional] 

## Example

```python
from openapi_client.models.campaign import Campaign

# TODO update the JSON string below
json = "{}"
# create an instance of Campaign from a JSON string
campaign_instance = Campaign.from_json(json)
# print the JSON string representation of the object
print(Campaign.to_json())

# convert the object into a dict
campaign_dict = campaign_instance.to_dict()
# create an instance of Campaign from a dict
campaign_from_dict = Campaign.from_dict(campaign_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


