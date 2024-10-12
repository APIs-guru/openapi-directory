# RunnerChange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atb** | **List[List[float]]** | Available To Back - PriceVol tuple delta of price changes (0 vol is remove) | [optional] 
**atl** | **List[List[float]]** | Available To Lay - PriceVol tuple delta of price changes (0 vol is remove) | [optional] 
**batb** | **List[List[float]]** | Best Available To Back - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove) | [optional] 
**batl** | **List[List[float]]** | Best Available To Lay - LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove) | [optional] 
**bdatb** | **List[List[float]]** | Best Display Available To Back (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove) | [optional] 
**bdatl** | **List[List[float]]** | Best Display Available To Lay (includes virtual prices)- LevelPriceVol triple delta of price changes, keyed by level (0 vol is remove) | [optional] 
**hc** | **float** | Handicap - the handicap of the runner (selection) (null if not applicable) | [optional] 
**id** | **int** | Selection Id - the id of the runner (selection) | [optional] 
**ltp** | **float** | Last Traded Price - The last traded price (or null if un-changed) | [optional] 
**spb** | **List[List[float]]** | Starting Price Back - PriceVol tuple delta of price changes (0 vol is remove) | [optional] 
**spf** | **float** | Starting Price Far - The far starting price (or null if un-changed) | [optional] 
**spl** | **List[List[float]]** | Starting Price Lay - PriceVol tuple delta of price changes (0 vol is remove) | [optional] 
**spn** | **float** | Starting Price Near - The far starting price (or null if un-changed) | [optional] 
**trd** | **List[List[float]]** | Traded - PriceVol tuple delta of price changes (0 vol is remove) | [optional] 
**tv** | **float** | The total amount matched. This value is truncated at 2dp. | [optional] 

## Example

```python
from openapi_client.models.runner_change import RunnerChange

# TODO update the JSON string below
json = "{}"
# create an instance of RunnerChange from a JSON string
runner_change_instance = RunnerChange.from_json(json)
# print the JSON string representation of the object
print(RunnerChange.to_json())

# convert the object into a dict
runner_change_dict = runner_change_instance.to_dict()
# create an instance of RunnerChange from a dict
runner_change_from_dict = RunnerChange.from_dict(runner_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


