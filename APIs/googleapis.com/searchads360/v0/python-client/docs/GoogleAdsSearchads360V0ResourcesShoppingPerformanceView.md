# GoogleAdsSearchads360V0ResourcesShoppingPerformanceView

Shopping performance view. Provides Shopping campaign statistics aggregated at several product dimension levels. Product dimension values from Merchant Center such as brand, category, custom attributes, product condition and product type will reflect the state of each dimension as of the date and time when the corresponding event was recorded.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_name** | **str** | Output only. The resource name of the Shopping performance view. Shopping performance view resource names have the form: &#x60;customers/{customer_id}/shoppingPerformanceView&#x60; | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_shopping_performance_view import GoogleAdsSearchads360V0ResourcesShoppingPerformanceView

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesShoppingPerformanceView from a JSON string
google_ads_searchads360_v0_resources_shopping_performance_view_instance = GoogleAdsSearchads360V0ResourcesShoppingPerformanceView.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesShoppingPerformanceView.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_shopping_performance_view_dict = google_ads_searchads360_v0_resources_shopping_performance_view_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesShoppingPerformanceView from a dict
google_ads_searchads360_v0_resources_shopping_performance_view_from_dict = GoogleAdsSearchads360V0ResourcesShoppingPerformanceView.from_dict(google_ads_searchads360_v0_resources_shopping_performance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


