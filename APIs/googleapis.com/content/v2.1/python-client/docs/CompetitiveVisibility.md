# CompetitiveVisibility

Fields related to [competitive visibility reports] (https://support.google.com/merchants/answer/11366442).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ads_organic_ratio** | **float** | [Ads / organic ratio] (https://support.google.com/merchants/answer/11366442#zippy&#x3D;%2Cadsfree-ratio) shows how often a merchant receives impressions from Shopping ads compared to organic traffic. The number is rounded and bucketed. Available only in &#x60;CompetitiveVisibilityTopMerchantView&#x60; and &#x60;CompetitiveVisibilityCompetitorView&#x60;. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 
**category_benchmark_visibility_trend** | **float** | Change in visibility based on impressions with respect to the start of the selected time range (or first day with non-zero impressions) for a combined set of merchants with highest visibility approximating the market. Available only in &#x60;CompetitiveVisibilityBenchmarkView&#x60;. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 
**category_id** | **str** | Google product category ID to calculate the report for, represented in [Google&#39;s product taxonomy](https://support.google.com/merchants/answer/6324436). Required in the &#x60;SELECT&#x60; clause. A &#x60;WHERE&#x60; condition on &#x60;competitive_visibility.category_id&#x60; is required in the query. | [optional] 
**country_code** | **str** | The country where impression appeared. Required in the &#x60;SELECT&#x60; clause. A &#x60;WHERE&#x60; condition on &#x60;competitive_visibility.country_code&#x60; is required in the query. | [optional] 
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**domain** | **str** | Domain of your competitor or your domain, if &#39;is_your_domain&#39; is true. Available only in &#x60;CompetitiveVisibilityTopMerchantView&#x60; and &#x60;CompetitiveVisibilityCompetitorView&#x60;. Required in the &#x60;SELECT&#x60; clause for &#x60;CompetitiveVisibilityTopMerchantView&#x60; and &#x60;CompetitiveVisibilityCompetitorView&#x60;. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 
**higher_position_rate** | **float** | Higher position rate shows how often a competitor’s offer got placed in a higher position on the page than your offer. Available only in &#x60;CompetitiveVisibilityTopMerchantView&#x60; and &#x60;CompetitiveVisibilityCompetitorView&#x60;. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 
**is_your_domain** | **bool** | True if this row contains data for your domain. Available only in &#x60;CompetitiveVisibilityTopMerchantView&#x60; and &#x60;CompetitiveVisibilityCompetitorView&#x60;. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 
**page_overlap_rate** | **float** | Page overlap rate describes how frequently competing retailers’ offers are shown together with your offers on the same page. Available only in &#x60;CompetitiveVisibilityTopMerchantView&#x60; and &#x60;CompetitiveVisibilityCompetitorView&#x60;. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 
**rank** | **str** | Position of the domain in the top merchants ranking for the selected keys (&#x60;date&#x60;, &#x60;category_id&#x60;, &#x60;country_code&#x60;, &#x60;listing_type&#x60;) based on impressions. 1 is the highest. Available only in &#x60;CompetitiveVisibilityTopMerchantView&#x60; and &#x60;CompetitiveVisibilityCompetitorView&#x60;. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 
**relative_visibility** | **float** | Relative visibility shows how often your competitors’ offers are shown compared to your offers. In other words, this is the number of displayed impressions of a competitor retailer divided by the number of your displayed impressions during a selected time range for a selected product category and country. Available only in &#x60;CompetitiveVisibilityCompetitorView&#x60;. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 
**traffic_source** | **str** | Type of impression listing. Required in the &#x60;SELECT&#x60; clause. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 
**your_domain_visibility_trend** | **float** | Change in visibility based on impressions for your domain with respect to the start of the selected time range (or first day with non-zero impressions). Available only in &#x60;CompetitiveVisibilityBenchmarkView&#x60;. Cannot be filtered on in the &#39;WHERE&#39; clause. | [optional] 

## Example

```python
from openapi_client.models.competitive_visibility import CompetitiveVisibility

# TODO update the JSON string below
json = "{}"
# create an instance of CompetitiveVisibility from a JSON string
competitive_visibility_instance = CompetitiveVisibility.from_json(json)
# print the JSON string representation of the object
print(CompetitiveVisibility.to_json())

# convert the object into a dict
competitive_visibility_dict = competitive_visibility_instance.to_dict()
# create an instance of CompetitiveVisibility from a dict
competitive_visibility_from_dict = CompetitiveVisibility.from_dict(competitive_visibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


