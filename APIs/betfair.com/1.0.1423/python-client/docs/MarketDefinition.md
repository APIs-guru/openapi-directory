# MarketDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bet_delay** | **int** |  | [optional] 
**betting_type** | **str** |  | [optional] 
**bsp_market** | **bool** |  | [optional] 
**bsp_reconciled** | **bool** |  | [optional] 
**complete** | **bool** |  | [optional] 
**country_code** | **str** |  | [optional] 
**cross_matching** | **bool** |  | [optional] 
**discount_allowed** | **bool** |  | [optional] 
**each_way_divisor** | **float** |  | [optional] 
**event_id** | **str** |  | [optional] 
**event_type_id** | **str** | The Event Type the market is contained within. | [optional] 
**in_play** | **bool** |  | [optional] 
**key_line_definition** | [**KeyLineDefinition**](KeyLineDefinition.md) |  | [optional] 
**line_interval** | **float** | For Handicap and Line markets, the lines available on this market will be between the range of lineMinUnit and lineMaxUnit, in increments of the lineInterval value. e.g. If unit is runs, lineMinUnit&#x3D;10, lineMaxUnit&#x3D;20 and lineInterval&#x3D;0.5, then valid lines include 10, 10.5, 11, 11.5 up to 20 runs. | [optional] 
**line_max_unit** | **float** | For Handicap and Line markets, the maximum value for the outcome, in market units for this market (eg 100 runs). | [optional] 
**line_min_unit** | **float** | For Handicap and Line markets, the minimum value for the outcome, in market units for this market (eg 0 runs). | [optional] 
**market_base_rate** | **float** |  | [optional] 
**market_time** | **datetime** |  | [optional] 
**market_type** | **str** |  | [optional] 
**number_of_active_runners** | **int** |  | [optional] 
**number_of_winners** | **int** |  | [optional] 
**open_date** | **datetime** |  | [optional] 
**persistence_enabled** | **bool** |  | [optional] 
**price_ladder_definition** | [**PriceLadderDefinition**](PriceLadderDefinition.md) |  | [optional] 
**race_type** | **str** |  | [optional] 
**regulators** | **List[str]** | The market regulators. | [optional] 
**runners** | [**List[RunnerDefinition]**](RunnerDefinition.md) |  | [optional] 
**runners_voidable** | **bool** |  | [optional] 
**settled_time** | **datetime** |  | [optional] 
**status** | **str** |  | [optional] 
**suspend_time** | **datetime** |  | [optional] 
**timezone** | **str** |  | [optional] 
**turn_in_play_enabled** | **bool** |  | [optional] 
**venue** | **str** |  | [optional] 
**version** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.market_definition import MarketDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of MarketDefinition from a JSON string
market_definition_instance = MarketDefinition.from_json(json)
# print the JSON string representation of the object
print(MarketDefinition.to_json())

# convert the object into a dict
market_definition_dict = market_definition_instance.to_dict()
# create an instance of MarketDefinition from a dict
market_definition_from_dict = MarketDefinition.from_dict(market_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


