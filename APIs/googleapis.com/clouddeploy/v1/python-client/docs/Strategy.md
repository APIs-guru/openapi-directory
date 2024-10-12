# Strategy

Strategy contains deployment strategy information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canary** | [**Canary**](Canary.md) |  | [optional] 
**standard** | [**Standard**](Standard.md) |  | [optional] 

## Example

```python
from openapi_client.models.strategy import Strategy

# TODO update the JSON string below
json = "{}"
# create an instance of Strategy from a JSON string
strategy_instance = Strategy.from_json(json)
# print the JSON string representation of the object
print(Strategy.to_json())

# convert the object into a dict
strategy_dict = strategy_instance.to_dict()
# create an instance of Strategy from a dict
strategy_from_dict = Strategy.from_dict(strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


