# OrderRunnerChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_image** | **bool** |  | [optional] 
**hc** | **float** | Handicap - the handicap of the runner (selection) (null if not applicable) | [optional] 
**id** | **int** | Selection Id - the id of the runner (selection) | [optional] 
**mb** | **List[List[float]]** | Matched Backs - matched amounts by distinct matched price on the Back side for this runner (selection) | [optional] 
**ml** | **List[List[float]]** | Matched Lays - matched amounts by distinct matched price on the Lay side for this runner (selection) | [optional] 
**smc** | [**Dict[str, StrategyMatchChange]**](StrategyMatchChange.md) | Strategy Matches - Matched Backs and Matched Lays grouped by strategy reference | [optional] 
**uo** | [**List[Order]**](Order.md) | Unmatched Orders - orders on this runner (selection) that are not fully matched | [optional] 

## Example

```python
from openapi_client.models.order_runner_change import OrderRunnerChange

# TODO update the JSON string below
json = "{}"
# create an instance of OrderRunnerChange from a JSON string
order_runner_change_instance = OrderRunnerChange.from_json(json)
# print the JSON string representation of the object
print(OrderRunnerChange.to_json())

# convert the object into a dict
order_runner_change_dict = order_runner_change_instance.to_dict()
# create an instance of OrderRunnerChange from a dict
order_runner_change_from_dict = OrderRunnerChange.from_dict(order_runner_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


