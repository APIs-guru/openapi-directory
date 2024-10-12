# PriceCoverageBucket

Coverage stats for one combination of advance booking window and length of stay.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advance_booking_window_range** | **str** | Advance booking window range. | [optional] 
**available_price_count** | **str** | Number of prices for this advance booking window bucket and length of stay bucket. | [optional] 
**length_of_stay_range** | **str** | Length of stay range. | [optional] 
**price_coverage_percent** | **float** | The percent of itineraries for which you have coverage for this advance booking window bucket and length of stay bucket. | [optional] 

## Example

```python
from openapi_client.models.price_coverage_bucket import PriceCoverageBucket

# TODO update the JSON string below
json = "{}"
# create an instance of PriceCoverageBucket from a JSON string
price_coverage_bucket_instance = PriceCoverageBucket.from_json(json)
# print the JSON string representation of the object
print(PriceCoverageBucket.to_json())

# convert the object into a dict
price_coverage_bucket_dict = price_coverage_bucket_instance.to_dict()
# create an instance of PriceCoverageBucket from a dict
price_coverage_bucket_from_dict = PriceCoverageBucket.from_dict(price_coverage_bucket_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


