# GoogleAdsHomeservicesLocalservicesV1AccountReport

An Account Report of a GLS account identified by their account id containing aggregate data gathered from a particular date range. Next ID: 18

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Unique identifier of the GLS account. | [optional] 
**aggregator_info** | [**GoogleAdsHomeservicesLocalservicesV1AggregatorInfo**](GoogleAdsHomeservicesLocalservicesV1AggregatorInfo.md) |  | [optional] 
**average_five_star_rating** | **float** | Average review rating score from 1-5 stars. | [optional] 
**average_weekly_budget** | **float** | Average weekly budget in the currency code of the account. | [optional] 
**business_name** | **str** | Business name of the account. | [optional] 
**currency_code** | **str** | Currency code of the account. | [optional] 
**current_period_charged_leads** | **str** | Number of charged leads the account received in current specified period. | [optional] 
**current_period_connected_phone_calls** | **str** | Number of connected phone calls (duration over 30s) in current specified period. | [optional] 
**current_period_phone_calls** | **str** | Number of phone calls in current specified period, including both connected and unconnected calls. | [optional] 
**current_period_total_cost** | **float** | Total cost of the account in current specified period in the account&#39;s specified currency. | [optional] 
**impressions_last_two_days** | **str** | Number of impressions that customers have had in the past 2 days. | [optional] 
**phone_lead_responsiveness** | **float** | Phone lead responsiveness of the account for the past 90 days from current date. This is computed by taking the total number of connected calls from charged phone leads and dividing by the total number of calls received. | [optional] 
**previous_period_charged_leads** | **str** | Number of charged leads the account received in previous specified period. | [optional] 
**previous_period_connected_phone_calls** | **str** | Number of connected phone calls (duration over 30s) in previous specified period. | [optional] 
**previous_period_phone_calls** | **str** | Number of phone calls in previous specified period, including both connected and unconnected calls. | [optional] 
**previous_period_total_cost** | **float** | Total cost of the account in previous specified period in the account&#39;s specified currency. | [optional] 
**total_review** | **int** | Total number of reviews the account has up to current date. | [optional] 

## Example

```python
from openapi_client.models.google_ads_homeservices_localservices_v1_account_report import GoogleAdsHomeservicesLocalservicesV1AccountReport

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsHomeservicesLocalservicesV1AccountReport from a JSON string
google_ads_homeservices_localservices_v1_account_report_instance = GoogleAdsHomeservicesLocalservicesV1AccountReport.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsHomeservicesLocalservicesV1AccountReport.to_json())

# convert the object into a dict
google_ads_homeservices_localservices_v1_account_report_dict = google_ads_homeservices_localservices_v1_account_report_instance.to_dict()
# create an instance of GoogleAdsHomeservicesLocalservicesV1AccountReport from a dict
google_ads_homeservices_localservices_v1_account_report_from_dict = GoogleAdsHomeservicesLocalservicesV1AccountReport.from_dict(google_ads_homeservices_localservices_v1_account_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


