# GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport

A Detailed Lead Report of a lead identified by their lead id and contains consumer, account, monetization, and lead data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Identifies account that received the lead. | [optional] 
**aggregator_info** | [**GoogleAdsHomeservicesLocalservicesV1AggregatorInfo**](GoogleAdsHomeservicesLocalservicesV1AggregatorInfo.md) |  | [optional] 
**booking_lead** | [**GoogleAdsHomeservicesLocalservicesV1BookingLead**](GoogleAdsHomeservicesLocalservicesV1BookingLead.md) |  | [optional] 
**business_name** | **str** | Business name associated to the account. | [optional] 
**charge_status** | **str** | Whether the lead has been charged. | [optional] 
**currency_code** | **str** | Currency code. | [optional] 
**dispute_status** | **str** | Dispute status related to the lead. | [optional] 
**geo** | **str** | Location of the associated account&#39;s home city. | [optional] 
**google_ads_lead_id** | **str** | Unique identifier of a Detailed Lead Report. | [optional] 
**lead_category** | **str** | Lead category (e.g. hvac, plumber) | [optional] 
**lead_creation_timestamp** | **str** | Timestamp of when the lead was created. | [optional] 
**lead_id** | **str** | Deprecated in favor of google_ads_lead_id. Unique identifier of a Detailed Lead Report. | [optional] 
**lead_price** | **float** | Price of the lead (available only after it has been charged). | [optional] 
**lead_type** | **str** | Lead type. | [optional] 
**message_lead** | [**GoogleAdsHomeservicesLocalservicesV1MessageLead**](GoogleAdsHomeservicesLocalservicesV1MessageLead.md) |  | [optional] 
**phone_lead** | [**GoogleAdsHomeservicesLocalservicesV1PhoneLead**](GoogleAdsHomeservicesLocalservicesV1PhoneLead.md) |  | [optional] 
**timezone** | [**GoogleTypeTimeZone**](GoogleTypeTimeZone.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_ads_homeservices_localservices_v1_detailed_lead_report import GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport from a JSON string
google_ads_homeservices_localservices_v1_detailed_lead_report_instance = GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.to_json())

# convert the object into a dict
google_ads_homeservices_localservices_v1_detailed_lead_report_dict = google_ads_homeservices_localservices_v1_detailed_lead_report_instance.to_dict()
# create an instance of GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport from a dict
google_ads_homeservices_localservices_v1_detailed_lead_report_from_dict = GoogleAdsHomeservicesLocalservicesV1DetailedLeadReport.from_dict(google_ads_homeservices_localservices_v1_detailed_lead_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


