# ResponseWithContinuationCost

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Cost]**](Cost.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_cost import ResponseWithContinuationCost

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationCost from a JSON string
response_with_continuation_cost_instance = ResponseWithContinuationCost.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationCost.to_json())

# convert the object into a dict
response_with_continuation_cost_dict = response_with_continuation_cost_instance.to_dict()
# create an instance of ResponseWithContinuationCost from a dict
response_with_continuation_cost_from_dict = ResponseWithContinuationCost.from_dict(response_with_continuation_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


