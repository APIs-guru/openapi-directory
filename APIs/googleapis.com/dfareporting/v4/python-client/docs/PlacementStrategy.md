# PlacementStrategy

Contains properties of a placement strategy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this placement strategy.This is a read-only field that can be left blank. | [optional] 
**id** | **str** | ID of this placement strategy. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#placementStrategy\&quot;. | [optional] 
**name** | **str** | Name of this placement strategy. This is a required field. It must be less than 256 characters long and unique among placement strategies of the same account. | [optional] 

## Example

```python
from openapi_client.models.placement_strategy import PlacementStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of PlacementStrategy from a JSON string
placement_strategy_instance = PlacementStrategy.from_json(json)
# print the JSON string representation of the object
print(PlacementStrategy.to_json())

# convert the object into a dict
placement_strategy_dict = placement_strategy_instance.to_dict()
# create an instance of PlacementStrategy from a dict
placement_strategy_from_dict = PlacementStrategy.from_dict(placement_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


