# PriceCoverageView

A price coverage view. Covers the `price_coverage_stats` Scorecard functionality in pre-v3.0 API versions. For more information, refer to Price Coverage for Push and Hint partners.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**matched_property_count** | **int** | The total number of properties that have prices for the given itineraries. | [optional] 
**price_coverage_binary_percent** | **float** | The ratio between the number of hotels which have at least one price for the calculation period and &#x60;matched_property_count&#x60;. | [optional] 
**price_coverage_buckets** | [**List[PriceCoverageBucket]**](PriceCoverageBucket.md) | Price coverage stats for combinations of advance booking window and length of stay ranges. | [optional] 
**price_coverage_percent** | **float** | The overall price coverage for an account. This value is the ratio between the number of hotel prices for the calculation booking window and length of stay range divided by the number of all possible prices, which is &#x60;matched_property_count&#x60; times 330 (for advance book window) times 30 (for length of stay). | [optional] 

## Example

```python
from openapi_client.models.price_coverage_view import PriceCoverageView

# TODO update the JSON string below
json = "{}"
# create an instance of PriceCoverageView from a JSON string
price_coverage_view_instance = PriceCoverageView.from_json(json)
# print the JSON string representation of the object
print(PriceCoverageView.to_json())

# convert the object into a dict
price_coverage_view_dict = price_coverage_view_instance.to_dict()
# create an instance of PriceCoverageView from a dict
price_coverage_view_from_dict = PriceCoverageView.from_dict(price_coverage_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


