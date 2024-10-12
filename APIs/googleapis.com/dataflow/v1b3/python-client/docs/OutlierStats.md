# OutlierStats

Statistics for the underflow and overflow bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overflow_count** | **str** | Number of values that are larger than the upper bound of the largest bucket. | [optional] 
**overflow_mean** | **float** | Mean of values in the overflow bucket. | [optional] 
**underflow_count** | **str** | Number of values that are smaller than the lower bound of the smallest bucket. | [optional] 
**underflow_mean** | **float** | Mean of values in the undeflow bucket. | [optional] 

## Example

```python
from openapi_client.models.outlier_stats import OutlierStats

# TODO update the JSON string below
json = "{}"
# create an instance of OutlierStats from a JSON string
outlier_stats_instance = OutlierStats.from_json(json)
# print the JSON string representation of the object
print(OutlierStats.to_json())

# convert the object into a dict
outlier_stats_dict = outlier_stats_instance.to_dict()
# create an instance of OutlierStats from a dict
outlier_stats_from_dict = OutlierStats.from_dict(outlier_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


