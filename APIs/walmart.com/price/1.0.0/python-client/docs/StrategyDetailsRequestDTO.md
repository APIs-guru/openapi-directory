# StrategyDetailsRequestDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strategy** | [**GetRepricerFeedRequestItemInnerStrategy**](GetRepricerFeedRequestItemInnerStrategy.md) |  | [optional] 

## Example

```python
from openapi_client.models.strategy_details_request_dto import StrategyDetailsRequestDTO

# TODO update the JSON string below
json = "{}"
# create an instance of StrategyDetailsRequestDTO from a JSON string
strategy_details_request_dto_instance = StrategyDetailsRequestDTO.from_json(json)
# print the JSON string representation of the object
print(StrategyDetailsRequestDTO.to_json())

# convert the object into a dict
strategy_details_request_dto_dict = strategy_details_request_dto_instance.to_dict()
# create an instance of StrategyDetailsRequestDTO from a dict
strategy_details_request_dto_from_dict = StrategyDetailsRequestDTO.from_dict(strategy_details_request_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


