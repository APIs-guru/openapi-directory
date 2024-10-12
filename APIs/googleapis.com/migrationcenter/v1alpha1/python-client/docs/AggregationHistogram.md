# AggregationHistogram

Histogram of bucketed assets counts by field value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lower_bounds** | **List[float]** | Lower bounds of buckets. The response will contain &#x60;n+1&#x60; buckets for &#x60;n&#x60; bounds. The first bucket will count all assets for which the field value is smaller than the first bound. Subsequent buckets will count assets for which the field value is greater or equal to a lower bound and smaller than the next one. The last bucket will count assets for which the field value is greater or equal to the final lower bound. You can define up to 20 lower bounds. | [optional] 

## Example

```python
from openapi_client.models.aggregation_histogram import AggregationHistogram

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationHistogram from a JSON string
aggregation_histogram_instance = AggregationHistogram.from_json(json)
# print the JSON string representation of the object
print(AggregationHistogram.to_json())

# convert the object into a dict
aggregation_histogram_dict = aggregation_histogram_instance.to_dict()
# create an instance of AggregationHistogram from a dict
aggregation_histogram_from_dict = AggregationHistogram.from_dict(aggregation_histogram_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


