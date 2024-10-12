# AggregationInfo

Represents the aggregation level and interval for pricing of a single SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_count** | **int** | The number of intervals to aggregate over. Example: If aggregation_level is \&quot;DAILY\&quot; and aggregation_count is 14, aggregation will be over 14 days. | [optional] 
**aggregation_interval** | **str** |  | [optional] 
**aggregation_level** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.aggregation_info import AggregationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AggregationInfo from a JSON string
aggregation_info_instance = AggregationInfo.from_json(json)
# print the JSON string representation of the object
print(AggregationInfo.to_json())

# convert the object into a dict
aggregation_info_dict = aggregation_info_instance.to_dict()
# create an instance of AggregationInfo from a dict
aggregation_info_from_dict = AggregationInfo.from_dict(aggregation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


