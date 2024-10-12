# CampaignSummary

Represents a summarized campaign information associated with this invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_invoice_code** | **str** | Campaign billing invoice code. | [optional] 
**campaign_id** | **str** | Campaign ID. | [optional] 
**pre_tax_amount_micros** | **str** | The pre-tax amount for this campaign, in micros of the invoice&#39;s currency. | [optional] 
**tax_amount_micros** | **str** | The tax amount for this campaign, in micros of the invoice&#39;s currency. | [optional] 
**total_amount_micros** | **str** | The total amount of charges for this campaign, in micros of the invoice&#39;s currency. | [optional] 

## Example

```python
from openapi_client.models.campaign_summary import CampaignSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CampaignSummary from a JSON string
campaign_summary_instance = CampaignSummary.from_json(json)
# print the JSON string representation of the object
print(CampaignSummary.to_json())

# convert the object into a dict
campaign_summary_dict = campaign_summary_instance.to_dict()
# create an instance of CampaignSummary from a dict
campaign_summary_from_dict = CampaignSummary.from_dict(campaign_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


