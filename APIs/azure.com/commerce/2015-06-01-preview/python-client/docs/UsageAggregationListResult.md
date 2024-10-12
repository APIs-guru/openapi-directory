# UsageAggregationListResult

The Get UsageAggregates operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Gets or sets the link to the next set of results. | [optional] 
**value** | [**List[UsageAggregation]**](UsageAggregation.md) | Gets or sets details for the requested aggregation. | [optional] 

## Example

```python
from openapi_client.models.usage_aggregation_list_result import UsageAggregationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of UsageAggregationListResult from a JSON string
usage_aggregation_list_result_instance = UsageAggregationListResult.from_json(json)
# print the JSON string representation of the object
print(UsageAggregationListResult.to_json())

# convert the object into a dict
usage_aggregation_list_result_dict = usage_aggregation_list_result_instance.to_dict()
# create an instance of UsageAggregationListResult from a dict
usage_aggregation_list_result_from_dict = UsageAggregationListResult.from_dict(usage_aggregation_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


