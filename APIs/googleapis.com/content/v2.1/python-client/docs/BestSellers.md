# BestSellers

Fields related to the [Best sellers reports](https://support.google.com/merchants/answer/9488679).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **str** | Google product category ID to calculate the ranking for, represented in [Google&#39;s product taxonomy](https://support.google.com/merchants/answer/6324436). If a &#x60;WHERE&#x60; condition on &#x60;best_sellers.category_id&#x60; is not specified in the query, rankings for all top-level categories are returned. | [optional] 
**country_code** | **str** | Country where the ranking is calculated. A &#x60;WHERE&#x60; condition on &#x60;best_sellers.country_code&#x60; is required in the query. | [optional] 
**previous_rank** | **str** | Popularity rank in the previous week or month. | [optional] 
**previous_relative_demand** | **str** | Estimated demand in relation to the item with the highest popularity rank in the same category and country in the previous week or month. | [optional] 
**rank** | **str** | Popularity on Shopping ads and free listings, in the selected category and country, based on the estimated number of units sold. | [optional] 
**relative_demand** | **str** | Estimated demand in relation to the item with the highest popularity rank in the same category and country. | [optional] 
**relative_demand_change** | **str** | Change in the estimated demand. Whether it rose, sank or remained flat. | [optional] 
**report_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**report_granularity** | **str** | Granularity of the report. The ranking can be done over a week or a month timeframe. A &#x60;WHERE&#x60; condition on &#x60;best_sellers.report_granularity&#x60; is required in the query. | [optional] 

## Example

```python
from openapi_client.models.best_sellers import BestSellers

# TODO update the JSON string below
json = "{}"
# create an instance of BestSellers from a JSON string
best_sellers_instance = BestSellers.from_json(json)
# print the JSON string representation of the object
print(BestSellers.to_json())

# convert the object into a dict
best_sellers_dict = best_sellers_instance.to_dict()
# create an instance of BestSellers from a dict
best_sellers_from_dict = BestSellers.from_dict(best_sellers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


