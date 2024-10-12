# ResponseWithContinuationCostInsight

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[CostInsight]**](CostInsight.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_cost_insight import ResponseWithContinuationCostInsight

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationCostInsight from a JSON string
response_with_continuation_cost_insight_instance = ResponseWithContinuationCostInsight.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationCostInsight.to_json())

# convert the object into a dict
response_with_continuation_cost_insight_dict = response_with_continuation_cost_insight_instance.to_dict()
# create an instance of ResponseWithContinuationCostInsight from a dict
response_with_continuation_cost_insight_from_dict = ResponseWithContinuationCostInsight.from_dict(response_with_continuation_cost_insight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


